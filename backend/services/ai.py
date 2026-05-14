import os
import json
from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv()

client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
MODEL = "claude-opus-4-7"


def build_coach_system_prompt(coach) -> str:
    return f"""You are an expert social media growth strategist and sales coach specializing in helping fitness coaches build viral online presences and convert followers into high-paying clients. You deeply understand human psychology, viral content mechanics, and high-ticket sales for the fitness industry.

COACH PROFILE:
Name: {coach.name}
Specialty: {coach.specialty}
Niche: {coach.niche}
Target Client: {coach.target_client}

OFFER:
Name: {coach.offer.name}
Description: {coach.offer.description}
Price: {coach.offer.price}
Duration: {coach.offer.duration}
Format: {coach.offer.format}

PROOF & RESULTS:
{coach.results}

COACH STORY:
{coach.story}

FINANCIAL GOALS:
Income Goal: {coach.income_goal}/month
Current Revenue: {coach.current_revenue}/month

CONTENT STYLE: {coach.content_style}

CURRENT AUDIENCE:
Instagram: {coach.followers.instagram} followers
Facebook: {coach.followers.facebook} followers
TikTok: {coach.followers.tiktok} followers
Threads: {coach.followers.threads} followers

Always respond with valid JSON only. No markdown, no code blocks, just raw JSON."""


def generate_viral_content(coach, platform: str, content_type: str, topic: str = None) -> dict:
    topic_line = f"\nFocus topic: {topic}" if topic else ""

    user_prompt = f"""Generate 3 highly viral {content_type} posts for {platform} for this fitness coach.{topic_line}

Platform: {platform}
Content Type: {content_type}

Requirements:
- Hook within first 3 words that stops the scroll
- Authentic voice matching the coach's story and specialty
- Subtle authority positioning using their real results
- Clear call-to-action that drives DMs or bookings
- Platform-specific formatting (use line breaks, emojis appropriately for {platform})
- Each post must address a pain point of their target client

Return a JSON object with this exact structure:
{{
  "pieces": [
    {{
      "title": "short descriptive title",
      "content": "the full post text",
      "why_it_works": "explanation of the psychological triggers and viral mechanics",
      "viral_potential": "High|Medium|Very High",
      "best_time_to_post": "day and time recommendation",
      "hashtags": ["tag1", "tag2", "tag3"]
    }}
  ]
}}"""

    response = client.messages.create(
        model=MODEL,
        max_tokens=4000,
        thinking={"type": "adaptive"},
        system=[
            {
                "type": "text",
                "text": build_coach_system_prompt(coach),
                "cache_control": {"type": "ephemeral"},
            }
        ],
        messages=[{"role": "user", "content": user_prompt}],
    )

    text = next(b.text for b in response.content if b.type == "text")
    return json.loads(text)


def generate_script(coach, script_type: str, platform: str = None, objection: str = None) -> dict:
    platform_line = f" on {platform}" if platform else ""
    objection_line = f"\nObjection to handle: {objection}" if objection else ""

    script_prompts = {
        "dm_opener": f"""Write 5 different DM opener scripts{platform_line} for this fitness coach to start conversations with potential clients.{objection_line}

These should feel natural, not salesy. They should start a genuine conversation, show interest in the prospect, and subtly position the coach as an authority.

Return JSON:
{{
  "script_type": "DM Opener",
  "platform": "{platform or 'general'}",
  "scripts": [
    {{
      "name": "script name/style (e.g. 'Curiosity Hook', 'Compliment Bridge')",
      "message": "the full DM text",
      "when_to_use": "describe the situation/prospect type this works best for",
      "follow_up": "what to say if they respond positively"
    }}
  ],
  "pro_tips": ["tip1", "tip2", "tip3"]
}}""",

        "sales_call": f"""Write a complete sales call script for this fitness coach to close high-ticket clients.

The script should cover:
1. Opening and rapport building
2. Discovery questions (pain points, goals, timeline)
3. Presenting the offer powerfully
4. Handling common objections
5. The close

Return JSON:
{{
  "script_type": "Sales Call",
  "sections": [
    {{
      "section": "section name",
      "duration": "estimated minutes",
      "script": "the actual words to say",
      "notes": "coaching notes on delivery"
    }}
  ],
  "key_questions": ["question1", "question2", "question3"],
  "power_phrases": ["phrase1", "phrase2", "phrase3"],
  "objection_responses": [
    {{
      "objection": "common objection",
      "response": "how to handle it"
    }}
  ]
}}""",

        "objection_handler": f"""Write objection-handling scripts for this fitness coach.{objection_line}

Cover these common objections:
1. "I can't afford it"
2. "I need to think about it"
3. "I need to talk to my spouse"
4. "I've tried programs before and they didn't work"
5. {f'"{objection}"' if objection else '"I don\'t have time"'}

Return JSON:
{{
  "script_type": "Objection Handler",
  "objections": [
    {{
      "objection": "the objection",
      "psychology": "why they really say this",
      "response": "the full script to handle it",
      "follow_up": "what to say next"
    }}
  ]
}}""",

        "follow_up": f"""Write a 5-message follow-up sequence for prospects who expressed interest but didn't book{platform_line}.

Each message should add value, create urgency, and re-engage without being pushy.

Return JSON:
{{
  "script_type": "Follow-Up Sequence",
  "platform": "{platform or 'general'}",
  "messages": [
    {{
      "day": 1,
      "message": "the full message text",
      "purpose": "goal of this message",
      "subject_line": "if email, subject line"
    }}
  ],
  "re_engagement_tips": ["tip1", "tip2", "tip3"]
}}""",
    }

    user_prompt = script_prompts.get(script_type, script_prompts["dm_opener"])

    response = client.messages.create(
        model=MODEL,
        max_tokens=4000,
        thinking={"type": "adaptive"},
        system=[
            {
                "type": "text",
                "text": build_coach_system_prompt(coach),
                "cache_control": {"type": "ephemeral"},
            }
        ],
        messages=[{"role": "user", "content": user_prompt}],
    )

    text = next(b.text for b in response.content if b.type == "text")
    return json.loads(text)


def find_groups(coach, platforms: list) -> dict:
    platforms_str = ", ".join(platforms)

    user_prompt = f"""Find the best online communities and groups for this fitness coach to attract ideal clients on: {platforms_str}

Based on their niche ({coach.niche}), target client ({coach.target_client}), and specialty ({coach.specialty}), identify:

1. Specific types of groups/communities to join and participate in
2. Exact search terms to find these groups
3. How to engage authentically without being spammy
4. Content angles that work in these communities
5. Hashtag strategies for each platform

Return JSON:
{{
  "platforms": [
    {{
      "platform": "platform name",
      "group_types": [
        {{
          "type": "type of group/community",
          "examples": ["example search term 1", "example search term 2"],
          "why_ideal": "why these people need this coach",
          "engagement_strategy": "how to show up and add value"
        }}
      ],
      "search_terms": ["term1", "term2", "term3", "term4", "term5"],
      "hashtag_strategy": {{
        "niche_hashtags": ["tag1", "tag2", "tag3"],
        "broad_hashtags": ["tag1", "tag2", "tag3"],
        "location_hashtags": ["tag1", "tag2"],
        "how_to_use": "strategy for using these hashtags"
      }},
      "content_that_gets_shared": ["content idea 1", "content idea 2", "content idea 3"],
      "posting_strategy": "when and how often to post in communities"
    }}
  ],
  "outreach_approach": "overall philosophy for community engagement",
  "red_flags_to_avoid": ["mistake1", "mistake2", "mistake3"]
}}"""

    response = client.messages.create(
        model=MODEL,
        max_tokens=4000,
        thinking={"type": "adaptive"},
        system=[
            {
                "type": "text",
                "text": build_coach_system_prompt(coach),
                "cache_control": {"type": "ephemeral"},
            }
        ],
        messages=[{"role": "user", "content": user_prompt}],
    )

    text = next(b.text for b in response.content if b.type == "text")
    return json.loads(text)


def build_strategy(coach, duration_days: int = 30) -> dict:
    user_prompt = f"""Build a complete {duration_days}-day viral growth and revenue strategy for this fitness coach.

Goal: Help them go viral with their ideal clients and hit their income goal of {coach.income_goal}/month.

Create a comprehensive strategy including:
1. Their unique viral formula based on their story and niche
2. Content pillars (3-5 themes to rotate through)
3. Week-by-week action plan
4. Revenue roadmap (how many clients needed, at what price)
5. Daily non-negotiable actions

Return JSON:
{{
  "viral_formula": {{
    "unique_angle": "what makes this coach stand out",
    "content_personality": "their content persona/voice",
    "signature_hook": "their go-to opening pattern"
  }},
  "content_pillars": [
    {{
      "pillar": "pillar name",
      "description": "what this content category covers",
      "example_topics": ["topic1", "topic2", "topic3"],
      "platforms": ["platform1", "platform2"]
    }}
  ],
  "phases": [
    {{
      "phase": "Phase 1: Foundation (Week 1-2)",
      "goal": "main goal of this phase",
      "daily_actions": ["action1", "action2", "action3"],
      "content_focus": "what type of content to prioritize",
      "milestones": ["milestone1", "milestone2"]
    }}
  ],
  "revenue_roadmap": {{
    "monthly_goal": "{coach.income_goal}",
    "clients_needed": "number of clients at their price point",
    "conversion_rate_needed": "what percentage of leads need to convert",
    "leads_needed_weekly": "how many leads to generate per week",
    "primary_revenue_actions": ["action1", "action2", "action3"]
  }},
  "daily_checklist": [
    {{
      "time": "morning/afternoon/evening",
      "action": "specific action",
      "duration": "minutes",
      "platform": "where to do it"
    }}
  ],
  "viral_content_calendar": {{
    "monday": "content theme",
    "tuesday": "content theme",
    "wednesday": "content theme",
    "thursday": "content theme",
    "friday": "content theme",
    "saturday": "content theme",
    "sunday": "content theme"
  }},
  "success_metrics": ["metric1", "metric2", "metric3", "metric4"]
}}"""

    response = client.messages.create(
        model=MODEL,
        max_tokens=6000,
        thinking={"type": "adaptive"},
        system=[
            {
                "type": "text",
                "text": build_coach_system_prompt(coach),
                "cache_control": {"type": "ephemeral"},
            }
        ],
        messages=[{"role": "user", "content": user_prompt}],
    )

    text = next(b.text for b in response.content if b.type == "text")
    return json.loads(text)
