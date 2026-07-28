export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  content: ContentBlock[];
};

/**
 * Blog posts for organic search traffic. Add a new object to this array to
 * publish a new post — no other file needs to change. See GUIDE.md for tips
 * on picking topics/keywords for new posts.
 */
export const posts: BlogPost[] = [
  {
    slug: "is-my-business-ready-for-ai",
    title: "Is My Business Ready for AI? 5 Signs You're a Good Fit",
    description:
      "Not sure if AI is worth your time yet? Here are 5 signs your business is ready to start using AI to save time and money.",
    publishedAt: "2026-01-12",
    readingTime: "4 min read",
    content: [
      {
        type: "p",
        text: "\"AI\" gets talked about like it's only for big tech companies with data science teams. In reality, some of the biggest time and money savings from AI are happening at small and local businesses that automate the repetitive parts of their day. Here's how to tell if your business is ready.",
      },
      {
        type: "h2",
        text: "1. You (or your team) do the same task manually, over and over",
      },
      {
        type: "p",
        text: "Writing the same kind of email, answering the same handful of customer questions, scheduling the same type of appointment — repetitive, well-defined tasks are exactly what AI tools are good at handling for you.",
      },
      {
        type: "h2",
        text: "2. You're the bottleneck",
      },
      {
        type: "p",
        text: "If growth is capped by how many hours are in your day rather than how much demand exists, that's a strong signal that automating even one or two tasks could free up real capacity.",
      },
      {
        type: "h2",
        text: "3. You're paying for work that's mostly \"look it up and write it down\"",
      },
      {
        type: "p",
        text: "Research, note-taking, first-draft writing, data entry, follow-up messages — these are some of the lowest-effort, highest-payoff places to introduce AI, often without hiring anyone new.",
      },
      {
        type: "h2",
        text: "4. You've never used AI at all",
      },
      {
        type: "p",
        text: "This one might be surprising, but starting from zero is fine. You don't need an existing tech stack to benefit — you just need a clear, simple starting point, which is exactly what a starter roadmap is for.",
      },
      {
        type: "h2",
        text: "5. You want to compete with bigger businesses without a bigger budget",
      },
      {
        type: "p",
        text: "AI narrows the gap between a solo operator and a large team, because a lot of what used to require headcount can now be handled with the right setup.",
      },
      {
        type: "h2",
        text: "See where AI fits into your business",
      },
      {
        type: "p",
        text: "If any of these sound familiar, a free AI business assessment call is the fastest way to find out exactly where AI could save you time and money — no tech background required.",
      },
    ],
  },
  {
    slug: "ai-quick-wins-small-business",
    title: "4 Quick AI Wins Any Small Business Can Use This Week",
    description:
      "You don't need a big budget or a tech team to get value from AI. Here are 4 practical, low-effort AI wins small businesses can put to use right away.",
    publishedAt: "2026-01-19",
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "AI doesn't have to mean a big software overhaul. Most small businesses can get real value from a few small, targeted changes. Here are four that tend to apply almost everywhere.",
      },
      {
        type: "h2",
        text: "1. Let AI draft your repetitive customer messages",
      },
      {
        type: "p",
        text: "Follow-ups, appointment reminders, FAQ replies, review requests — these are almost always some version of the same message. Drafting a solid template once with AI, then reusing and lightly editing it, can save hours a week.",
      },
      {
        type: "h2",
        text: "2. Turn your calls or meetings into usable notes automatically",
      },
      {
        type: "p",
        text: "If you're taking notes by hand during calls with clients or customers, a simple transcription step plus an AI summary can turn a 30-minute call into clear action items in a couple of minutes.",
      },
      {
        type: "h2",
        text: "3. Use AI as a first-draft writer, not a final answer",
      },
      {
        type: "p",
        text: "Social captions, job descriptions, service descriptions, email replies — AI is excellent at getting you from a blank page to a solid first draft, which you then quickly edit rather than write from scratch.",
      },
      {
        type: "h2",
        text: "4. Build one simple, repeatable process instead of ten one-off ones",
      },
      {
        type: "p",
        text: "The biggest win usually isn't a single AI tool — it's turning a task you do differently every time into one repeatable process AI can help with consistently, whether that's onboarding a new client or responding to a common inquiry.",
      },
      {
        type: "h2",
        text: "Want wins built specifically for your business?",
      },
      {
        type: "p",
        text: "These four are common starting points, but the highest-impact wins are the ones built around how your specific business actually runs. A free AI business assessment call takes 15 minutes and gets you 4 wins tailored to you, not a generic list.",
      },
    ],
  },
  {
    slug: "what-to-expect-free-ai-business-assessment-call",
    title: "What to Expect on Your Free AI Business Assessment Call",
    description:
      "Curious what actually happens on a free AI business assessment call? Here's a plain-English walkthrough of the process, what's asked, and what you get afterward.",
    publishedAt: "2026-01-26",
    readingTime: "3 min read",
    content: [
      {
        type: "p",
        text: "If you've never done anything like this before, it's fair to want to know what you're signing up for. Here's exactly what happens, start to finish.",
      },
      {
        type: "h2",
        text: "Before the call",
      },
      {
        type: "p",
        text: "You book a free 15-minute slot. There's nothing to prepare and nothing to pay — just show up ready to talk about your business for a few minutes.",
      },
      {
        type: "h2",
        text: "During the call",
      },
      {
        type: "p",
        text: "You'll be asked around 5 questions covering things like: what your business does, what a normal day/week looks like, what tasks eat up the most time, what you've already tried (if anything), and where you'd like things to be easier.",
      },
      {
        type: "h2",
        text: "After the call",
      },
      {
        type: "p",
        text: "Your answers are reviewed in depth to build a plan specific to your business — not a generic checklist. That plan includes:",
      },
      {
        type: "ul",
        items: [
          "4 quick AI wins you can start using right away",
          "A starter AI roadmap if you're new to AI, so you know exactly what to set up first",
          "Everything delivered in writing, yours to keep",
        ],
      },
      {
        type: "h2",
        text: "No pressure, no obligation",
      },
      {
        type: "p",
        text: "There's no requirement to buy anything or continue working together afterward. The goal of the free call is simple: give you a clear, useful answer to \"how could AI actually help my business?\"",
      },
    ],
  },
  {
    slug: "stop-getting-your-email-blocked-after-a-launch",
    title: "Why Sending More Emails Can Get You Blocked (And How to Avoid It)",
    description:
      "A sudden spike in signups can get your email account flagged and blocked, even with a great open rate. Here's why that happens and how to launch without it.",
    publishedAt: "2026-07-14",
    readingTime: "4 min read",
    content: [
      {
        type: "p",
        text: "Here's a scenario that trips up a lot of course creators and membership owners: you run a great launch, hundreds or thousands of people sign up within hours, and then your email platform blocks you from sending. Your open rate is over 60%. Your list is engaged. None of that seems to matter — you still get flagged.",
      },
      {
        type: "h2",
        text: "It's not spam, it's the sudden change",
      },
      {
        type: "p",
        text: "Email providers watch for sudden shifts in sending behavior, not just content quality. A list that's been quiet for weeks and then blasts out thousands of emails in a short window looks, statistically, exactly like a hijacked account or a spam operation ramping up — even when a real, engaged audience is on the other end. The trigger is the shape of the spike, not the substance of the emails.",
      },
      {
        type: "h2",
        text: "3 ways to protect your next launch",
      },
      {
        type: "ul",
        items: [
          "Warm up before the spike — send a few normal-volume emails in the days leading up to a launch so the jump isn't a cliff",
          "Send in batches — release a big send over a few hours instead of all at once, especially for your first launch on a platform",
          "Have a backup channel ready — if email pauses mid-launch, a DM automation, SMS, or in-app announcement keeps people moving toward your offer",
        ],
      },
      {
        type: "h2",
        text: "Plan for the spike, don't just react to it",
      },
      {
        type: "p",
        text: "If launches are a regular part of how you get customers, this isn't a one-time fix — it's a pattern worth building into your process every time, the same way you'd plan any other part of a launch. A little bit of forecasting (how many people are likely to sign up, how fast) turns a launch-day emergency into a non-issue.",
      },
      {
        type: "h2",
        text: "This is exactly the kind of thing a fresh set of eyes catches",
      },
      {
        type: "p",
        text: "Deliverability issues like this rarely show up until they've already cost you leads — which is exactly what a free AI business assessment call is for. Bring the specifics of how your business actually runs, and get a plan built around your real bottlenecks, not generic advice.",
      },
    ],
  },
  {
    slug: "ai-content-repurposing-system",
    title: "How to Turn One Piece of Content Into a Week of Marketing With AI",
    description:
      "Course creators and coaches don't need to write every post from scratch. Here's a simple AI system to turn one long-form piece into a week of content, without it turning into AI slop.",
    publishedAt: "2026-07-21",
    readingTime: "5 min read",
    content: [
      {
        type: "p",
        text: "If you teach, coach, or run a membership, content creation is probably eating more of your week than you'd like. The obvious answer is \"just use AI for it,\" but a lot of business owners have already tried that and ended up with something worse: generic, soulless posts that took almost as long to fix as they would have to write from scratch. That's a system problem, not an AI problem.",
      },
      {
        type: "h2",
        text: "The fix isn't \"use AI more,\" it's \"build a repurposing system\"",
      },
      {
        type: "p",
        text: "The highest-leverage way to use AI for content isn't asking it to invent your ideas — it's asking it to reformat ideas you've already created in your own voice. One piece of long-form content, made once, can become a week's worth of shorter posts across every platform you use.",
      },
      {
        type: "h2",
        text: "A simple weekly system",
      },
      {
        type: "ul",
        items: [
          "Once a week, create one piece of long-form content in your own words — an article, a class outline, or a recorded lesson you'd already be making anyway",
          "Feed that piece to AI with a repurposing prompt: ask for social captions, an email version, and short-form video scripts pulled directly from it",
          "Do a quick pass to restore your voice and cut anything that sounds off, then schedule the batch for the week",
        ],
      },
      {
        type: "h2",
        text: "How to avoid \"AI slop\"",
      },
      {
        type: "p",
        text: "The rule that keeps this from feeling generic: AI never originates the core idea, it only reformats an idea you already wrote. Ask it to invent your message from scratch and you'll get filler. Ask it to repackage your actual thinking into five different formats, and you get content that still sounds like you — just faster.",
      },
      {
        type: "h2",
        text: "Free up time for the part that actually converts",
      },
      {
        type: "p",
        text: "For most coaches and course creators, the goal isn't content for its own sake — it's freeing up time to do the live teaching, sales calls, or client work that content is supposed to lead to. A repurposing system is one of the quick wins that consistently comes out of a free AI business assessment call, tailored to whatever platforms and content types you already use.",
      },
    ],
  },
  {
    slug: "real-cost-of-manual-outreach",
    title: "The Real Cost of Manual Outreach (And a Smarter Way to Spend That Hour)",
    description:
      "If you're spending an hour a day manually messaging strangers for leads, here's how to think about whether it's working, and what to automate instead.",
    publishedAt: "2026-07-28",
    readingTime: "4 min read",
    content: [
      {
        type: "p",
        text: "Picture a solo business owner spending an hour and a half a day scrolling social media, finding potential clients in the comments of other people's posts, and sending each one a personalized-sounding message by hand. Out of 66 messages sent in a day, maybe 5 people respond. Maybe 2 of those are actually interested. That's a real, common routine for solopreneurs trying to grow on social media, and it's worth doing the math on what it's actually costing.",
      },
      {
        type: "h2",
        text: "Do the math on what an hour actually costs you",
      },
      {
        type: "p",
        text: "An hour and a half a day, five days a week, is roughly 7-8 hours a week, or close to a full workday, spent on the highest-effort, lowest-conversion part of getting new clients. That's time not spent on sales calls, client work, or the parts of the business that only you can do.",
      },
      {
        type: "h2",
        text: "What you can't automate, and what you can",
      },
      {
        type: "p",
        text: "The initial outreach itself is genuinely hard to automate well, since the people being messaged aren't in your existing audience yet and a templated bulk message to strangers reads as spam. But the outreach isn't the only manual part of this process — the follow-up usually is too, and that's where automation earns its keep:",
      },
      {
        type: "ul",
        items: [
          "A simple CRM or even a spreadsheet-based tracker so no lead's follow-up date gets missed or forgotten",
          "A templated (not robotic) follow-up sequence that's triggered on a schedule instead of relying on remembering who's due for a message",
          "A weekly look at response-rate numbers to decide whether this channel is worth the time versus trying something else",
        ],
      },
      {
        type: "h2",
        text: "The bigger fix: know what to prioritize before you automate",
      },
      {
        type: "p",
        text: "For a lot of solo business owners, the harder problem isn't a lack of hustle — it's not knowing what's actually worth spending today's two hours on. Automation should follow a clear sense of priorities, not replace the need for one. That clarity is usually the first thing worth getting right, before adding any tools on top of it.",
      },
      {
        type: "h2",
        text: "Get a plan built around how you actually spend your time",
      },
      {
        type: "p",
        text: "If a chunk of your week looks like this, a free AI business assessment call can pinpoint exactly which parts are worth automating first and which parts of your routine should probably change entirely.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
