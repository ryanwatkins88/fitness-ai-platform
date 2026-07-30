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
  {
    slug: "prehab-how-to-prepare-for-surgery-with-exercise",
    title: "Prehab 101: How to Prepare for Surgery With Exercise",
    description:
      "What \"prehab\" actually means, why it's linked to better surgical outcomes, and what a basic pre-surgery exercise plan focuses on.",
    audience: "mobility",
    publishedAt: "2026-07-10",
    readingTime: "5 min read",
    blocks: [
      {
        type: "paragraph",
        text: "Most people prepare for surgery by mentally bracing for the recovery. Far fewer prepare their body beforehand — even though the weeks before a procedure are often the best window you'll have to influence how that recovery goes.",
      },
      {
        type: "heading",
        text: "What \"prehab\" actually means",
      },
      {
        type: "paragraph",
        text: "Prehab is targeted exercise done in the weeks leading up to a scheduled surgery or procedure — a joint replacement, a rotator cuff repair, a meniscus repair, anything with a known recovery period. The goal isn't to train hard for its own sake; it's to walk into surgery stronger, more mobile, and more capable than you'd be doing nothing.",
      },
      {
        type: "heading",
        text: "Why it's worth doing",
      },
      {
        type: "paragraph",
        text: "Research on pre-surgical conditioning consistently points in the same direction: patients who go into surgery stronger tend to have an easier time regaining function afterward. That makes sense — recovery is largely about rebuilding strength and range of motion, and starting from a higher baseline means less ground to make up.",
      },
      {
        type: "heading",
        text: "What a basic prehab plan focuses on",
      },
      {
        type: "list",
        items: [
          "Strengthening the muscles that support the surgical site, within what's currently pain-tolerable",
          "General cardiovascular capacity, which supports a smoother hospital stay and recovery",
          "Maintaining or improving range of motion before it's restricted post-surgically",
          "Practicing post-op movement patterns (like using a walker, or getting in and out of a chair safely) while it's still easy to learn",
        ],
      },
      {
        type: "heading",
        text: "Timing matters",
      },
      {
        type: "paragraph",
        text: "Prehab is most useful started 4-8 weeks before a scheduled procedure, though even 2-3 weeks of focused work is better than none. The earlier you start, the more room there is to build a real strength base rather than just showing up less deconditioned.",
      },
      {
        type: "paragraph",
        text: "This article is educational and not medical advice. Always get clearance from your surgeon before starting a prehab program, and share your exercise plan with them.",
      },
    ],
    relatedHref: "/mobility-recovery",
    relatedLabel: "See how Mobility & Recovery coaching works",
  },
  {
    slug: "hip-arthritis-exercises-to-stay-active",
    title: "Hip Arthritis: Exercises to Stay Active Without Making It Worse",
    description:
      "How to keep training through hip arthritis — what to prioritize, what tends to flare it up, and why walking tolerance matters more than people think.",
    audience: "mobility",
    publishedAt: "2026-06-28",
    readingTime: "5 min read",
    blocks: [
      {
        type: "paragraph",
        text: "Hip arthritis has a way of making people quietly do less — a little less walking, a little less standing, without ever deciding to. That gradual pullback is usually what makes things worse, not the arthritis itself.",
      },
      {
        type: "heading",
        text: "Where to start: glutes, not stretching",
      },
      {
        type: "paragraph",
        text: "The instinct with hip pain is often to stretch it. More often, the bigger lever is strengthening the glutes and hip stabilizers, which take pressure off the joint by controlling how your leg moves under load — standing, walking, and climbing stairs included.",
      },
      {
        type: "heading",
        text: "Exercises worth prioritizing",
      },
      {
        type: "list",
        items: [
          "Glute bridges — builds hip extension strength without much joint compression",
          "Standing hip abduction (with or without a band) — targets the stabilizers that control side-to-side hip movement",
          "Sit-to-stands — functional strength through a range most daily movement actually uses",
          "Short, frequent walks — builds tolerance gradually instead of one long walk that flares things up",
        ],
      },
      {
        type: "heading",
        text: "What tends to flare it up",
      },
      {
        type: "paragraph",
        text: "Sudden increases in walking distance, deep unsupported flexion (like low couches or getting up from the floor awkwardly), and high-impact movement are the usual culprits. None of these need to be avoided forever — they just need to be reintroduced gradually, after a strength base is built.",
      },
      {
        type: "paragraph",
        text: "This article is educational and not a substitute for guidance from your physician or physical therapist — check with them before starting a new exercise routine.",
      },
    ],
    relatedHref: "/mobility-recovery",
    relatedLabel: "See how Mobility & Recovery coaching works",
  },
  {
    slug: "balance-exercises-for-seniors-at-home",
    title: "Balance Exercises for Seniors: A Simple Home Routine",
    description:
      "A basic, progressive balance routine you can do at home — and why balance needs to be trained directly, not just assumed to improve from general activity.",
    audience: "mobility",
    publishedAt: "2026-05-05",
    readingTime: "5 min read",
    blocks: [
      {
        type: "paragraph",
        text: "Balance doesn't reliably improve just from walking more or staying generally active. Like any other physical quality, it responds best to being trained directly — and for adults 50+, it's one of the highest-leverage things you can work on.",
      },
      {
        type: "heading",
        text: "Start with support, not without it",
      },
      {
        type: "paragraph",
        text: "Every stage below should be done near a wall, counter, or sturdy chair you can catch yourself on. The goal is building real balance capacity, not testing how long you can go without support.",
      },
      {
        type: "heading",
        text: "A simple progression",
      },
      {
        type: "list",
        items: [
          "Stage 1: Two-foot stance with eyes open, light fingertip support — hold 30 seconds",
          "Stage 2: Two-foot stance with eyes closed, light support — hold 20-30 seconds",
          "Stage 3: Single-leg stance near support, brief holds building toward 15-20 seconds per side",
          "Stage 4: Heel-to-toe walking (tandem walk) along a straight line, using a wall for light support as needed",
        ],
      },
      {
        type: "heading",
        text: "Why consistency matters more than difficulty",
      },
      {
        type: "paragraph",
        text: "Five to ten minutes most days of the week will build more real balance capacity than one long, harder session a week. Balance is a skill as much as a physical quality — it responds to frequent practice.",
      },
      {
        type: "paragraph",
        text: "This article is educational and not a substitute for guidance from your physician or physical therapist, especially if you have a history of falls — they may recommend a supervised starting point.",
      },
    ],
    relatedHref: "/mobility-recovery",
    relatedLabel: "See how Mobility & Recovery coaching works",
  },
  {
    slug: "glp1-and-protein-how-much-you-need",
    title: "GLP-1 and Protein: How Much You Actually Need",
    description:
      "Why protein intake matters more while on a GLP-1 medication, general ranges commonly cited for weight loss, and practical ways to hit them with a smaller appetite.",
    audience: "glp1",
    publishedAt: "2026-07-18",
    readingTime: "6 min read",
    blocks: [
      {
        type: "paragraph",
        text: "GLP-1 medications reduce appetite — which is the point, for weight loss. The tradeoff is that eating less overall makes it easier to fall short on protein specifically, right when your body needs it most to preserve muscle during a calorie deficit.",
      },
      {
        type: "heading",
        text: "Why protein needs don't drop with your appetite",
      },
      {
        type: "paragraph",
        text: "Muscle preservation during weight loss depends heavily on adequate protein intake combined with resistance training. A smaller appetite doesn't reduce how much protein your body needs to hold onto muscle — it just makes hitting that number harder.",
      },
      {
        type: "heading",
        text: "General ranges (not a prescription)",
      },
      {
        type: "paragraph",
        text: "Nutrition guidance for preserving muscle during weight loss commonly cites a range in the neighborhood of 0.7-1 gram of protein per pound of body weight, though individual needs vary based on your starting point, activity level, and health history. This is general education, not a personalized recommendation — a registered dietitian or your prescribing provider can help you land on a number that's right for you.",
      },
      {
        type: "heading",
        text: "Practical ways to hit it with a smaller appetite",
      },
      {
        type: "list",
        items: [
          "Prioritize protein first at each meal, before other foods, while appetite allows it",
          "Spread intake across more, smaller meals rather than 2-3 larger ones",
          "Lean on efficient sources — Greek yogurt, cottage cheese, eggs, protein shakes — that deliver more protein per bite when volume is the limiting factor",
          "Track for a few days if you're unsure where you actually land — most people underestimate the gap",
        ],
      },
      {
        type: "paragraph",
        text: "This article is educational and not medical or nutrition advice. Always follow guidance from your prescribing provider or a registered dietitian regarding your specific nutrition needs.",
      },
    ],
    relatedHref: "/glp1-support",
    relatedLabel: "See how GLP-1 Strength Support coaching works",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
