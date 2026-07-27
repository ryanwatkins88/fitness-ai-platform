# The AI Assessment Workflow

This is the actual process for turning a free discovery call into a paid-quality
deliverable using Claude. It's the core "product" behind the website — the site
gets people to book the call, this is what you do once they're on it.

## Step 1: The discovery call (free, ~15 minutes)

Ask roughly these 5 questions. Keep it conversational — you don't need to ask
them in this exact order or wording, and follow-up questions are good.

1. **What does your business do, and who's your typical customer?**
2. **Walk me through what a normal week looks like for you (and your team, if you have one).**
3. **What tasks eat up the most time, or feel repetitive and tedious?**
4. **Have you used any AI tools before — ChatGPT, Claude, anything? If so, what happened?**
5. **If you could wave a magic wand and fix one thing about how your business runs day-to-day, what would it be?**

Optional 6th question if there's time: *"What's your budget or appetite for
paying for tools, if any of this requires it?"* — useful for tailoring the
roadmap to free vs. paid tools.

## Step 2: Record and transcribe the call

You need a text transcript, not just audio. Easiest free options:

- **Zoom**: Enable cloud recording with "Audio transcript" turned on in your
  Zoom account settings before the call. Zoom generates a `.vtt`/text
  transcript automatically after the call ends.
- **Google Meet**: Turn on "Transcript" in the call controls — Google Docs
  gets a transcript saved to your Drive automatically.
- **Otter.ai** (free tier): Join as a bot or upload the recording afterward;
  it transcribes and lets you copy the text out.

Always tell the person you're recording and get a quick verbal okay at the
start of the call.

## Step 3: Turn the transcript into a plan with Claude

Go to [claude.ai](https://claude.ai), start a new chat, and paste in the
prompt below with the transcript attached. Swap in the business name.

````
You are helping me create a custom AI implementation plan for a client after
a discovery call. I'm going to paste the call transcript below. Read it
carefully and produce a plan following the exact structure specified.

CLIENT BUSINESS: [business name]
INDUSTRY: [one line, e.g. "residential plumbing" or "boutique fitness studio"]

Your output must have exactly these sections, in this order:

1. "Where You're Losing Time and Money Today" — 3-5 bullet points, in plain
   English, pulled directly from what they said in the transcript. No AI
   jargon. This proves I listened.

2. "Your 4 Quick Wins" — exactly 4 numbered items. For each one, give:
   - A short, specific title (not generic — reference their actual workflow)
   - What it does and why it saves them time or money
   - Roughly how long it takes to set up (hours, not weeks)
   - One concrete tool or approach to do it (name real, current tools —
     prefer free or low-cost options unless they mentioned budget for more)
   Order these from easiest/fastest to hardest.

3. "Your Starter AI Roadmap" — for someone new to AI, a simple 3-phase path
   (Phase 1: This Week, Phase 2: This Month, Phase 3: This Quarter). Keep
   each phase to 2-3 concrete actions. This should feel achievable, not
   overwhelming.

4. "A Note on Getting Started" — 2-3 sentences, encouraging and specific to
   their situation, no generic filler.

Rules:
- Do not recommend anything that requires coding or a technical hire.
- Be specific to what THIS business actually does — no generic "use AI for
  marketing" advice that could apply to anyone.
- Write for a business owner with no AI background. No jargon without a
  one-line explanation.
- Keep the whole thing tight enough to read in under 5 minutes.

TRANSCRIPT:
[paste the full call transcript here]
````

Claude will return a formatted plan. Read it over, adjust anything that
doesn't sound like you or doesn't fit the client, and it's ready to send.

## Step 4: Deliver it

Paste the plan into a clean document (Google Docs works fine) and send it
over — by email is simplest. This is also your natural opening to offer paid
implementation help if the client wants hands-on support with any of the 4
wins or the roadmap.

## Tips for better output

- The more specific the transcript (real numbers, real task names, real
  tool names they already use), the more specific and useful the plan.
- If the first draft feels generic, reply to Claude in the same conversation
  with: *"Make win #2 more specific to what they said about [X]"* — it's much
  faster to refine in-thread than to rewrite the prompt from scratch.
- Keep a running doc of which "quick wins" and tools you recommend most often
  — over time this becomes a swipe file that speeds up every future call.
