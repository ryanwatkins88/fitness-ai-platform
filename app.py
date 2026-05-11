import os
import json
import re
from flask import Flask, render_template, request, jsonify, session
import anthropic
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-prod')

BOOKING_SCRIPT = {
    "title": "DM Booking Script",
    "steps": [
        {
            "id": 1,
            "phase": "opener",
            "label": "Open the Conversation",
            "coach_says": "Did I see you were interested in my [lead magnet]?",
            "goal": "Confirm interest and open naturally — no pressure",
            "tips": "Swap [lead magnet] with exactly what they engaged with (guide, freebie, post, etc.)"
        },
        {
            "id": 2,
            "phase": "permission",
            "label": "Get Permission",
            "coach_says": "Great, is it ok to ask a couple questions to make sure this is the best to start with?\n\n(I might have other resources I could send...)",
            "goal": "Get buy-in before qualifying — this kills resistance",
            "tips": "The parenthetical creates curiosity and frames you as a helper, not a seller"
        },
        {
            "id": 3,
            "phase": "situation_check",
            "label": "Assess Their Situation",
            "coach_says": "Which sounds most like you right now?\n\n1) You're working out but not seeing definition\n2) You've lost weight but feel a little soft or flat\n3) You feel stuck and can't stay consistent",
            "goal": "Identify where they are so you can personalize everything from here",
            "tips": "Their answer tells you their self-awareness level and where the real gap is"
        },
        {
            "id": 4,
            "phase": "goal_deep_dive",
            "label": "Dig Into Their Goal",
            "coach_says": "What's your main goal right now — like what are you actually trying to change about your body?",
            "follow_ups": [
                "Tell me more.",
                "What does that actually look like for you? Is there a specific moment, outfit, or feeling you're going for?",
                "Wow, why so small? Is it because you don't believe it's actually possible after 40?"
            ],
            "goal": "Find the emotional 'why' — the real vision that drives action",
            "tips": "The outfit, the event, the feeling — that's what moves people. Keep digging until you hit emotion."
        },
        {
            "id": 5,
            "phase": "current_efforts",
            "label": "What Are They Doing Now?",
            "coach_says": "Got it. And what are you currently doing to try to get there?",
            "follow_ups": [
                "What else?",
                "Tell me more about that."
            ],
            "goal": "Understand their current approach so you can show the gap",
            "tips": "Let them talk. The more they share, the more invested they become in the conversation."
        },
        {
            "id": 6,
            "phase": "obstacle",
            "label": "Find the Real Obstacle",
            "coach_says": "Okay so what's the biggest obstacle — like why hasn't it happened yet?",
            "follow_ups": [
                "What else?",
                "Is it more that you don't know what to do, or you're doing the work and just not seeing anything move?",
                "Tell me more."
            ],
            "goal": "Surface their core obstacles — dig for at least 3",
            "tips": "Layer 1 is usually 'nothing's working.' Layer 2: confused. Layer 3: frustrated despite doing everything right. That third layer is pure gold."
        },
        {
            "id": 7,
            "phase": "past_attempts",
            "label": "What Have They Tried?",
            "coach_says": "What have you already tried?",
            "goal": "Learn their history to position your solution as genuinely different",
            "tips": "Listen for: random workouts, calorie cutting, cardio-heavy, programs not built for their life stage or body type"
        },
        {
            "id": 8,
            "phase": "call_to_action",
            "label": "Invite Them to a Call",
            "coach_says": "Okay, so I want to be straightforward with you — training is training. The [lead magnet] is good information, but I'd be lying if I said it was the magic pill to [result].\n\nDo you have time to hop on a call this week? I can send over my calendar link.\n\nI can give you a walkthrough of what my clients are doing to [result] and what you can do to model it. Also, I may be able to send you more in-depth training based on what it is you need.\n\nPromise I've got nothing to pitch you, unless you want and ask for my help. Lol",
            "goal": "Book the call in a low-pressure, honest, human way",
            "tips": "'Nothing to pitch' is the magic line — it removes sales pressure and builds instant trust. Keep the casual 'Lol' — it humanizes you."
        }
    ]
}


def get_client():
    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if not api_key:
        raise ValueError("ANTHROPIC_API_KEY is not set. Add it to your .env file.")
    return anthropic.Anthropic(api_key=api_key)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/profile', methods=['GET', 'POST'])
def profile():
    if request.method == 'POST':
        session['coach_profile'] = request.json
        return jsonify({'success': True})
    return jsonify(session.get('coach_profile', {}))


@app.route('/api/script', methods=['GET'])
def get_script():
    return jsonify(BOOKING_SCRIPT)


@app.route('/api/find-groups', methods=['POST'])
def find_groups():
    profile = request.json.get('profile', {})

    try:
        client = get_client()

        prompt = f"""You are an expert social media strategist for fitness coaches. A coach needs specific, actionable recommendations for where to find their ideal clients on Facebook and Threads.

Coach Profile:
- Niche/Specialty: {profile.get('niche', 'general fitness coaching')}
- Target Clientele: {profile.get('target_clientele', 'adults looking to get fit')}
- Client Age Range: {profile.get('age_range', 'not specified')}
- Client Gender: {profile.get('gender', 'not specified')}
- Client Pain Points: {profile.get('pain_points', 'not specified')}
- Client Goals: {profile.get('client_goals', 'not specified')}
- Lead Magnet / Main Offer: {profile.get('lead_magnet', 'not specified')}

Give highly specific recommendations tailored to THIS exact coach and clientele. No generic advice.

Respond ONLY with valid JSON in this exact structure:
{{
  "facebook_groups": [
    {{
      "category": "Short category name",
      "search_terms": ["exact phrase to type in Facebook search", "another search term", "third term"],
      "example_group_names": ["Realistic Group Name Example 1", "Realistic Group Name Example 2"],
      "why_relevant": "1-2 sentences on why THIS type of group has their exact target client",
      "how_to_engage": "Specific engagement tactic — not generic. What to post, comment on, or offer.",
      "what_to_avoid": "One specific pitfall in this group type"
    }}
  ],
  "threads_communities": [
    {{
      "category": "Short category name",
      "search_terms": ["term to search on Threads"],
      "hashtags": ["#relevant", "#hashtag", "#here"],
      "account_types_to_follow": ["Type of account 1", "Type of account 2"],
      "why_relevant": "Why Threads users in this space match their ideal client",
      "content_hook": "A specific type of post or hook that would attract this audience"
    }}
  ],
  "pro_tips": [
    "Specific actionable tip tailored to this coach's niche",
    "Another specific tip",
    "Third specific tip"
  ]
}}

Provide at least 6 Facebook group categories and at least 4 Threads community types. Be specific — real group names people would actually search for."""

        message = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=2500,
            messages=[{"role": "user", "content": prompt}]
        )

        response_text = message.content[0].text
        json_match = re.search(r'\{[\s\S]*\}', response_text)
        recommendations = json.loads(json_match.group() if json_match else response_text)

        return jsonify({'success': True, 'recommendations': recommendations})

    except ValueError as e:
        return jsonify({'success': False, 'error': str(e)}), 400
    except Exception as e:
        return jsonify({'success': False, 'error': f"Something went wrong: {str(e)}"}), 500


@app.route('/api/script-response', methods=['POST'])
def script_response():
    data = request.json
    profile = data.get('profile', {})
    conversation_history = data.get('conversation_history', [])
    current_step = data.get('current_step', 1)
    prospect_message = data.get('prospect_message', '')

    try:
        client = get_client()

        script_text = json.dumps(BOOKING_SCRIPT['steps'], indent=2)
        history_lines = "\n".join(
            f"{m['role'].upper()}: {m['content']}" for m in conversation_history
        ) or "No messages yet — this is the start of the conversation."

        prompt = f"""You are a DM coaching assistant for a fitness coach. Your job is to suggest the next best message to send to a prospect, using a proven booking script as the framework.

COACH PROFILE:
- Name: {profile.get('name', 'Coach')}
- Niche: {profile.get('niche', 'fitness coaching')}
- Lead Magnet: {profile.get('lead_magnet', 'fitness guide')}
- Target Client: {profile.get('target_clientele', 'adults')}
- Age Range: {profile.get('age_range', 'adults')}

BOOKING SCRIPT FRAMEWORK (follow this progression):
{script_text}

CONVERSATION SO FAR:
{history_lines}

CURRENT SCRIPT STEP: {current_step}
PROSPECT JUST SAID: "{prospect_message}"

Based on what the prospect said and where we are in the conversation, suggest the ideal next message.

Rules:
- Sound human and natural — NOT salesy or scripted
- Match the tone of how real people text (casual, warm, curious)
- Follow the script framework but adapt it to what they specifically said
- Use their actual words/phrases back to them
- If they're hesitant, slow down — don't rush to the call invite
- Only suggest moving to the call (Step 8) when there's real rapport and pain uncovered

Respond ONLY with valid JSON:
{{
  "suggested_response": "The exact message to send — ready to copy and paste",
  "why_it_works": "Brief psychology behind this response (1-2 sentences)",
  "listen_for": "What signals in their reply tell you to move forward or dig deeper",
  "current_step_id": {current_step},
  "next_step_id": 2,
  "ready_for_next": true,
  "alternative_response": "A slightly different version if they want options"
}}"""

        message = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1000,
            messages=[{"role": "user", "content": prompt}]
        )

        response_text = message.content[0].text
        json_match = re.search(r'\{[\s\S]*\}', response_text)
        suggestion = json.loads(json_match.group() if json_match else response_text)

        return jsonify({'success': True, 'suggestion': suggestion})

    except ValueError as e:
        return jsonify({'success': False, 'error': str(e)}), 400
    except Exception as e:
        return jsonify({'success': False, 'error': f"Something went wrong: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
