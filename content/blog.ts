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
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
