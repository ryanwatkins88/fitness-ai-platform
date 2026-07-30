export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  audience: "mobility" | "glp1";
  publishedAt: string;
  readingTime: string;
  blocks: ArticleBlock[];
  relatedHref: string;
  relatedLabel: string;
};

export const articles: Article[] = [
  {
    slug: "best-exercises-for-knee-arthritis-at-home",
    title: "Best Exercises for Knee Arthritis You Can Do at Home",
    description:
      "Safe, effective exercises for knee arthritis you can start at home — what to prioritize, what to avoid, and why gentle strength training helps more than rest.",
    audience: "mobility",
    publishedAt: "2026-06-15",
    readingTime: "6 min read",
    blocks: [
      {
        type: "paragraph",
        text: "If you've been told you have knee arthritis, the instinct is often to protect the joint by moving less. In practice, the opposite tends to help more: the muscles around your knee — especially your quads, glutes, and calves — are what actually absorb load and take pressure off the joint itself. Under-used muscles mean the joint takes on more stress, not less.",
      },
      {
        type: "heading",
        text: "Start with range of motion, not intensity",
      },
      {
        type: "paragraph",
        text: "Before loading the joint, spend a few minutes on gentle range-of-motion work: seated knee extensions, heel slides, and ankle pumps. These wake up the joint and surrounding tissue without stressing it, and they're a good daily habit even on days you don't train.",
      },
      {
        type: "heading",
        text: "Four exercises worth prioritizing",
      },
      {
        type: "list",
        items: [
          "Sit-to-stands from a sturdy chair — builds functional quad and glute strength using a movement you already do daily.",
          "Straight-leg raises — strengthens the quad without bending the knee through a painful range.",
          "Wall sits (partial range, pain-free only) — builds isometric strength and tolerance to load.",
          "Step-ups on a low step — rebuilds single-leg strength and stability, which most people with knee pain lose first.",
        ],
      },
      {
        type: "heading",
        text: "What to avoid early on",
      },
      {
        type: "paragraph",
        text: "Deep, unloaded knee bends (like full-depth bodyweight squats) and high-impact movement (running, jumping) tend to aggravate irritated joints before you've built a strength base. That doesn't mean avoid them forever — it means build tolerance gradually, starting with partial ranges and low impact.",
      },
      {
        type: "heading",
        text: "Consistency beats intensity",
      },
      {
        type: "paragraph",
        text: "Ten to fifteen minutes of the right exercises, four to five days a week, will outperform one exhausting session a week — both for pain and for long-term joint function. This is exactly why accountability and a program built for your specific knee matter more than a generic workout you find online.",
      },
      {
        type: "paragraph",
        text: "This article is educational and not a substitute for guidance from your physician or physical therapist — always check with them before starting a new exercise routine, especially post-surgery or during a flare-up.",
      },
    ],
    relatedHref: "/mobility-recovery",
    relatedLabel: "See how Mobility & Recovery coaching works",
  },
  {
    slug: "does-ozempic-cause-muscle-loss",
    title: "Does Ozempic Cause Muscle Loss? What the Research Says",
    description:
      "GLP-1 medications like Ozempic and Wegovy drive real weight loss — but a portion of that loss can be muscle. Here's what the research shows and how to protect your strength.",
    audience: "glp1",
    publishedAt: "2026-07-01",
    readingTime: "7 min read",
    blocks: [
      {
        type: "paragraph",
        text: "GLP-1 medications — Ozempic, Wegovy, Zepbound, Mounjaro — work by reducing appetite and slowing digestion, which leads to a calorie deficit and real weight loss. But weight loss isn't the same as fat loss. When your body is in a calorie deficit without a strong reason to hold onto muscle, some of what you lose is lean mass.",
      },
      {
        type: "heading",
        text: "What the research shows",
      },
      {
        type: "paragraph",
        text: "Clinical trials on GLP-1 medications have found that a meaningful share of total weight lost — commonly cited in the range of 25-40% in studies without structured resistance training — comes from lean mass rather than fat. That range varies by study and individual, but the pattern is consistent: without a reason to preserve it, your body treats muscle as expendable during rapid weight loss.",
      },
      {
        type: "heading",
        text: "Why this matters beyond appearance",
      },
      {
        type: "list",
        items: [
          "Muscle is what keeps your metabolism from dropping as fast as your body weight does.",
          "Strength is directly tied to functional independence, especially as you age.",
          "Lower muscle mass is linked to higher rates of weight regain after stopping GLP-1 medications.",
        ],
      },
      {
        type: "heading",
        text: "The two levers that protect muscle",
      },
      {
        type: "paragraph",
        text: "Resistance training and adequate protein intake are the two interventions research consistently points to for preserving lean mass during GLP-1-driven weight loss. Cardio alone doesn't send your body the signal to keep muscle — mechanical tension from resistance training does.",
      },
      {
        type: "heading",
        text: "Working around lower appetite and energy",
      },
      {
        type: "paragraph",
        text: "The practical challenge isn't knowing that strength training helps — it's doing it consistently with less appetite and, some weeks, less energy. That's where programming has to flex: shorter sessions, adjusted volume on harder weeks, and accountability that keeps you showing up even when motivation dips.",
      },
      {
        type: "paragraph",
        text: "This article is educational and not medical advice. Always follow guidance from your prescribing provider regarding your medication, dosing, and nutrition.",
      },
    ],
    relatedHref: "/glp1-support",
    relatedLabel: "See how GLP-1 Strength Support coaching works",
  },
  {
    slug: "returning-to-exercise-after-a-stroke",
    title: "Returning to Exercise After a Stroke: A Beginner's Guide",
    description:
      "What to know before starting an exercise routine after a stroke — from clearance and pacing to the kind of programming that supports long-term recovery.",
    audience: "mobility",
    publishedAt: "2026-05-20",
    readingTime: "6 min read",
    blocks: [
      {
        type: "paragraph",
        text: "Returning to exercise after a stroke looks different for everyone, depending on what was affected, how much formal rehab you've completed, and where you are today. What's consistent across almost every case: structured movement, done consistently, supports continued recovery well past the point where formal physical therapy ends.",
      },
      {
        type: "heading",
        text: "Get clearance first",
      },
      {
        type: "paragraph",
        text: "Before starting any new exercise routine post-stroke, get clearance from your physician or neurologist, especially if you haven't exercised independently before. This isn't a formality — it ensures your program accounts for any cardiovascular precautions or physical restrictions specific to you.",
      },
      {
        type: "heading",
        text: "Where programming typically starts",
      },
      {
        type: "list",
        items: [
          "Seated or supported balance work before standing balance work.",
          "Single-limb strength exercises to address side-to-side differences directly.",
          "Basic functional movements — sit-to-stand, step-ups — tied to real daily tasks.",
          "Light cardiovascular work as tolerated, building duration before intensity.",
        ],
      },
      {
        type: "heading",
        text: "Why consistency matters more than intensity here",
      },
      {
        type: "paragraph",
        text: "Neuroplasticity — your brain and body's ability to adapt and rebuild pathways — responds to repeated, consistent practice far more than occasional hard efforts. Frequent, moderate sessions tend to outperform infrequent, intense ones for this population.",
      },
      {
        type: "heading",
        text: "What ongoing coaching adds after formal PT ends",
      },
      {
        type: "paragraph",
        text: "Formal physical therapy is often time-limited by insurance, not by how much progress is still possible. Continued coaching — with programming built around your specific side, balance, and strength profile — is often where the next phase of real functional improvement happens.",
      },
      {
        type: "paragraph",
        text: "This article is educational and not a substitute for medical or physical therapy guidance. Work with your care team to determine what's appropriate for your specific situation.",
      },
    ],
    relatedHref: "/mobility-recovery",
    relatedLabel: "See how Mobility & Recovery coaching works",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
