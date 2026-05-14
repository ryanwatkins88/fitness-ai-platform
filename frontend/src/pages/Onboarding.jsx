import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dumbbell, ChevronRight, ChevronLeft } from 'lucide-react'

const STEPS = ['Basic Info', 'Your Offer', 'Results & Story', 'Goals & Target']

const defaultProfile = {
  name: '',
  specialty: '',
  niche: '',
  offer: { name: '', description: '', price: '', duration: '', format: '' },
  results: '',
  income_goal: '',
  current_revenue: '',
  target_client: '',
  story: '',
  content_style: '',
  followers: { instagram: '0', facebook: '0', tiktok: '0', threads: '0' },
}

function Field({ label, name, value, onChange, placeholder, multiline, hint }) {
  const cls = 'w-full bg-[#0f0f14] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 transition-colors'
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-gray-300">{label}</label>
      {hint && <p className="text-xs text-gray-500">{hint}</p>}
      {multiline ? (
        <textarea
          rows={4}
          className={cls}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          type="text"
          className={cls}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [profile, setProfile] = useState(defaultProfile)
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    if (name.startsWith('offer.')) {
      const key = name.replace('offer.', '')
      setProfile(p => ({ ...p, offer: { ...p.offer, [key]: value } }))
    } else if (name.startsWith('followers.')) {
      const key = name.replace('followers.', '')
      setProfile(p => ({ ...p, followers: { ...p.followers, [key]: value } }))
    } else {
      setProfile(p => ({ ...p, [name]: value }))
    }
  }

  function finish() {
    localStorage.setItem('coachProfile', JSON.stringify(profile))
    navigate('/')
  }

  const stepContent = [
    // Step 0 - Basic Info
    <div key="0" className="space-y-5">
      <Field label="Your Name" name="name" value={profile.name} onChange={handleChange} placeholder="e.g. Sarah Johnson" />
      <Field label="Coaching Specialty" name="specialty" value={profile.specialty} onChange={handleChange} placeholder="e.g. Weight Loss, Muscle Building, Mindset Coaching" />
      <Field label="Your Niche" name="niche" value={profile.niche} onChange={handleChange} placeholder="e.g. Busy moms over 35 who want to lose 20+ lbs" hint="Be specific — the riches are in the niches" />
      <Field label="Content Style" name="content_style" value={profile.content_style} onChange={handleChange} placeholder="e.g. Raw & real, educational, inspirational storytelling, tough love" />
      <div className="grid grid-cols-2 gap-4">
        {['instagram', 'facebook', 'tiktok', 'threads'].map(p => (
          <Field key={p} label={`${p.charAt(0).toUpperCase() + p.slice(1)} Followers`} name={`followers.${p}`} value={profile.followers[p]} onChange={handleChange} placeholder="0" />
        ))}
      </div>
    </div>,

    // Step 1 - Offer
    <div key="1" className="space-y-5">
      <Field label="Offer Name" name="offer.name" value={profile.offer.name} onChange={handleChange} placeholder="e.g. 12-Week Transformation Accelerator" />
      <Field label="What's Included" name="offer.description" value={profile.offer.description} onChange={handleChange} placeholder="e.g. 3x/week coaching calls, custom meal plan, 24/7 Slack access, weekly check-ins..." multiline hint="Describe everything they get" />
      <Field label="Price" name="offer.price" value={profile.offer.price} onChange={handleChange} placeholder="e.g. $3,000 or $500/month" />
      <Field label="Duration" name="offer.duration" value={profile.offer.duration} onChange={handleChange} placeholder="e.g. 12 weeks, 3 months, ongoing" />
      <Field label="Format" name="offer.format" value={profile.offer.format} onChange={handleChange} placeholder="e.g. 1:1 Zoom calls, group coaching, self-paced with weekly calls" />
    </div>,

    // Step 2 - Results & Story
    <div key="2" className="space-y-5">
      <Field
        label="Client Results & Testimonials"
        name="results"
        value={profile.results}
        onChange={handleChange}
        placeholder="e.g. Sarah lost 47lbs in 12 weeks. Mike went from $0 to $10k/month. Jennifer reversed her pre-diabetes..."
        multiline
        hint="Real results = real credibility. List your best wins."
      />
      <Field
        label="Your Story"
        name="story"
        value={profile.story}
        onChange={handleChange}
        placeholder="e.g. I was 80lbs overweight after my second child, told by my doctor I was headed for diabetes. I transformed my life in 18 months and now I help other moms do the same..."
        multiline
        hint="Your before/after story is your most powerful marketing tool"
      />
    </div>,

    // Step 3 - Goals & Target
    <div key="3" className="space-y-5">
      <Field
        label="Target Client Description"
        name="target_client"
        value={profile.target_client}
        onChange={handleChange}
        placeholder="e.g. Women 35-50, career-focused, 2+ kids, struggling with belly fat and low energy, have tried diets before, can afford premium coaching"
        multiline
        hint="Demographics, psychographics, pain points, and buying power"
      />
      <Field label="Monthly Income Goal" name="income_goal" value={profile.income_goal} onChange={handleChange} placeholder="e.g. $20,000" />
      <Field label="Current Monthly Revenue" name="current_revenue" value={profile.current_revenue} onChange={handleChange} placeholder="e.g. $3,000 or $0" />
    </div>,
  ]

  const isLastStep = step === STEPS.length - 1

  return (
    <div className="min-h-screen bg-[#0f0f14] flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center mx-auto mb-4">
            <Dumbbell size={28} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">FitCoach AI</h1>
          <p className="text-gray-400 mt-1 text-sm">Tell us about you — we'll customize everything to your niche</p>
        </div>

        <div className="flex items-center gap-2 mb-8">
          {STEPS.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <div className={`h-1 w-full rounded-full transition-colors ${i <= step ? 'bg-brand-500' : 'bg-white/10'}`} />
              <span className={`text-xs ${i === step ? 'text-brand-400' : i < step ? 'text-gray-500' : 'text-gray-700'}`}>{s}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#16161e] border border-white/5 rounded-2xl p-6">
          <h2 className="font-semibold text-white mb-6">{STEPS[step]}</h2>
          {stepContent[step]}

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(s => s - 1)}
              disabled={step === 0}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-400 hover:text-white disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
            {isLastStep ? (
              <button
                onClick={finish}
                className="flex items-center gap-2 px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Build My Strategy <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => setStep(s => s + 1)}
                className="flex items-center gap-2 px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Next <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
