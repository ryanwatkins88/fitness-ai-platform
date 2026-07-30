export type Condition = {
  slug: string;
  name: string;
  metaTitle: string;
  description: string;
  intro: string;
  focusAreas: string[];
  caution: string;
  relatedArticleSlug?: string;
};

export const conditions: Condition[] = [
  {
    slug: "knee-arthritis",
    name: "Knee Arthritis",
    metaTitle: "Online Personal Trainer for Knee Arthritis",
    description:
      "Online strength training for knee arthritis, built around your specific joint and pain-free range of motion — not a generic lower-body workout.",
    intro:
      "Knee arthritis responds better to the right kind of strengthening than to rest alone. The muscles around the joint — quads, glutes, and calves — absorb load that would otherwise fall on the joint itself.",
    focusAreas: [
      "Quad, glute, and calf strengthening within a pain-free range",
      "Sit-to-stand and step-up progressions tied to real daily movement",
      "Gradual range-of-motion work to reduce stiffness",
    ],
    caution:
      "Deep, unloaded knee bends and high-impact movement are usually introduced later, once a strength base is built — not avoided forever, just sequenced correctly.",
    relatedArticleSlug: "best-exercises-for-knee-arthritis-at-home",
  },
  {
    slug: "hip-arthritis",
    name: "Hip Arthritis",
    metaTitle: "Online Personal Trainer for Hip Arthritis",
    description:
      "Online coaching for hip arthritis focused on strength, mobility, and staying active without aggravating the joint.",
    intro:
      "Hip arthritis often limits range of motion before it limits strength. Programming has to respect both — building strength through the range you have while gradually working to reclaim what's been lost.",
    focusAreas: [
      "Glute and hip stabilizer strengthening",
      "Controlled mobility work for hip flexion, extension, and rotation",
      "Gait and single-leg stability training",
    ],
    caution:
      "Sudden increases in walking distance or unaccustomed loaded movement can flare an arthritic hip — progress is deliberately gradual.",
    relatedArticleSlug: "hip-arthritis-exercises-to-stay-active",
  },
  {
    slug: "rotator-cuff-tear",
    name: "Rotator Cuff Tear",
    metaTitle: "Online Personal Trainer for Rotator Cuff Tears",
    description:
      "Online strength coaching for rotator cuff injuries — rebuilding shoulder strength through a pain-free range without re-injury.",
    intro:
      "Most people with a rotator cuff tear either avoid the shoulder entirely or push back into full activity too soon. Both approaches tend to backfire. The middle path is training through a pain-free range and expanding it as the shoulder proves it's ready.",
    focusAreas: [
      "Scapular stability and rotator cuff-specific strengthening",
      "Pain-free range-of-motion progressions",
      "Gradual reintroduction of overhead and loaded movement",
    ],
    caution:
      "Overhead pressing and heavy pulling movements are typically the last things reintroduced, not the first.",
  },
  {
    slug: "wrist-thumb-pain",
    name: "Wrist & Thumb Pain",
    metaTitle: "Online Personal Trainer for Wrist and Thumb Pain",
    description:
      "Online coaching that works around wrist and thumb pain — common with arthritis and repetitive strain — without stopping upper-body training altogether.",
    intro:
      "Wrist and thumb pain often gets treated as a reason to stop upper-body training entirely. Usually it just means the grip and loading pattern need to change, not disappear.",
    focusAreas: [
      "Grip and loading modifications (straps, neutral-grip tools, machine alternatives)",
      "Forearm and hand strengthening within a tolerable range",
      "Identifying which pressing/pulling variations are actually the problem",
    ],
    caution:
      "Persistent joint swelling or numbness/tingling should be evaluated by a physician before continuing to train through it.",
  },
  {
    slug: "spinal-stenosis",
    name: "Spinal Stenosis",
    metaTitle: "Online Personal Trainer for Spinal Stenosis",
    description:
      "Online strength and mobility coaching for spinal stenosis, focused on core stability and positions that actually reduce symptoms.",
    intro:
      "Spinal stenosis symptoms often ease with flexion-based positions and worsen with prolonged extension — which shapes how a program is built, from warm-up through loaded exercise.",
    focusAreas: [
      "Core and postural stability work",
      "Positional awareness — which movements ease symptoms vs. aggravate them",
      "Walking tolerance and lower-body strength progressions",
    ],
    caution:
      "Prolonged standing extension-based work (like some traditional core exercises) is often modified or avoided based on your specific symptom pattern.",
  },
  {
    slug: "meniscus-tear",
    name: "Meniscus Tear",
    metaTitle: "Online Personal Trainer for Meniscus Tears",
    description:
      "Online coaching for meniscus tears, before or after surgery, focused on rebuilding knee strength and confidence.",
    intro:
      "Whether you're managing a meniscus tear conservatively or recovering post-surgery, the path back is largely the same: rebuild quad and hamstring strength, restore full range of motion, and progressively reload the knee.",
    focusAreas: [
      "Quad and hamstring strengthening through a safe range",
      "Balance and proprioception work specific to the knee",
      "Gradual return to higher-impact or rotational movement",
    ],
    caution:
      "Deep squatting and pivoting movements are typically reintroduced last, and only once strength and confidence support them.",
  },
  {
    slug: "post-stroke-recovery",
    name: "Post-Stroke Recovery",
    metaTitle: "Online Personal Trainer for Post-Stroke Recovery",
    description:
      "Online strength and balance coaching that continues after formal physical therapy ends for stroke survivors.",
    intro:
      "Formal physical therapy is often limited by insurance, not by how much recovery is still possible. Continued, consistent training — built around your specific side and balance profile — is frequently where the next phase of functional improvement happens.",
    focusAreas: [
      "Single-limb strength work to address side-to-side differences",
      "Seated and standing balance progressions",
      "Functional movement tied to daily tasks (sit-to-stand, walking, stairs)",
    ],
    caution:
      "Clearance from your physician or neurologist is required before starting, especially if you haven't exercised independently since your stroke.",
    relatedArticleSlug: "returning-to-exercise-after-a-stroke",
  },
  {
    slug: "parkinsons-disease",
    name: "Parkinson's Disease",
    metaTitle: "Online Personal Trainer for Parkinson's Disease",
    description:
      "Online exercise coaching for Parkinson's disease, focused on balance, mobility, and maintaining independence.",
    intro:
      "Exercise is one of the few interventions consistently linked to slower functional decline in Parkinson's disease. Programming focuses on the areas most affected — balance, gait, and movement amplitude — with consistency prioritized over intensity.",
    focusAreas: [
      "Balance and fall-risk reduction training",
      "Large-amplitude movement work",
      "Gait-focused strength and mobility exercises",
    ],
    caution:
      "Sessions are built around your medication timing and symptom fluctuations — what works well in an \"on\" period may need to change in an \"off\" period.",
  },
  {
    slug: "balance-fall-prevention",
    name: "Balance & Fall Prevention",
    metaTitle: "Online Balance Training & Fall Prevention Coaching (50+)",
    description:
      "Online balance training for adults 50+ focused on reducing fall risk and staying independent, not just \"staying active.\"",
    intro:
      "Balance is trainable, specifically and directly — not just a side effect of general exercise. For adults 50+, it's one of the highest-leverage things to work on for staying independent long-term.",
    focusAreas: [
      "Static and dynamic balance progressions",
      "Lower-body strength tied directly to fall-risk reduction",
      "Reaction-time and recovery-step practice",
    ],
    caution:
      "Balance work is progressed carefully with appropriate support (a wall, chair, or counter) until each stage is genuinely solid — the goal is confidence, not risk.",
    relatedArticleSlug: "balance-exercises-for-seniors-at-home",
  },
];

export function getConditionBySlug(slug: string) {
  return conditions.find((condition) => condition.slug === slug);
}
