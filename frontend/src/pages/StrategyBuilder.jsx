import { useState } from 'react'
import { TrendingUp, Sparkles, Target, Calendar, CheckSquare, DollarSign } from 'lucide-react'
import { buildStrategy } from '../api/client'
import LoadingSpinner from '../components/LoadingSpinner'

const DURATIONS = [
  { value: 30, label: '30 Days' },
  { value: 60, label: '60 Days' },
  { value: 90, label: '90 Days' },
]

export default function StrategyBuilder() {
  const [duration, setDuration] = useState(30)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')

  async function generate() {
    setLoading(true)
    setError('')
    setResults(null)
    try {
      const data = await buildStrategy({ duration_days: duration })
      setResults(data)
    } catch (e) {
      setError(e.response?.data?.detail || 'Something went wrong. Check that the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Strategy Builder</h1>
        <p className="text-gray-400 mt-1 text-sm">Your personalized viral growth & revenue roadmap</p>
      </div>

      <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6 space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-300 mb-3">Strategy Duration</p>
          <div className="flex gap-2">
            {DURATIONS.map(d => (
              <button
                key={d.value}
                onClick={() => setDuration(d.value)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  duration === d.value
                    ? 'bg-brand-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generate}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors"
        >
          <TrendingUp size={18} />
          Build My {duration}-Day Strategy
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      {loading && <LoadingSpinner message={`Building your ${duration}-day growth strategy...`} />}

      {results && (
        <div className="space-y-6">
          {results.viral_formula && (
            <div className="bg-gradient-to-br from-brand-600/20 to-brand-800/10 border border-brand-600/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-brand-400" />
                <h2 className="font-bold text-white">Your Viral Formula</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-brand-400 font-medium mb-0.5">Unique Angle</p>
                  <p className="text-sm text-gray-200">{results.viral_formula.unique_angle}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-400 font-medium mb-0.5">Content Personality</p>
                  <p className="text-sm text-gray-200">{results.viral_formula.content_personality}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-400 font-medium mb-0.5">Signature Hook</p>
                  <p className="text-sm text-gray-200 font-medium italic">"{results.viral_formula.signature_hook}"</p>
                </div>
              </div>
            </div>
          )}

          {results.content_pillars && (
            <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target size={18} className="text-brand-400" />
                <h2 className="font-bold text-white">Content Pillars</h2>
              </div>
              <div className="space-y-3">
                {results.content_pillars.map((pillar, i) => (
                  <div key={i} className="bg-[#0f0f14] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-brand-600/30 flex items-center justify-center text-brand-400 text-xs font-bold">
                        {i + 1}
                      </span>
                      <h3 className="font-semibold text-white text-sm">{pillar.pillar}</h3>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.example_topics?.map((t, ti) => (
                        <span key={ti} className="text-xs bg-white/5 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.phases && (
            <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={18} className="text-brand-400" />
                <h2 className="font-bold text-white">Game Plan</h2>
              </div>
              <div className="space-y-4">
                {results.phases.map((phase, i) => (
                  <div key={i} className="border border-white/5 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-400' : i === 1 ? 'bg-brand-400' : i === 2 ? 'bg-purple-400' : 'bg-yellow-400'}`} />
                      <h3 className="font-semibold text-white text-sm">{phase.phase}</h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{phase.goal}</p>
                    <div className="space-y-1.5">
                      {phase.daily_actions?.map((action, ai) => (
                        <div key={ai} className="flex gap-2 text-xs text-gray-400">
                          <span className="text-brand-400 mt-0.5">→</span>
                          {action}
                        </div>
                      ))}
                    </div>
                    {phase.milestones && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {phase.milestones.map((m, mi) => (
                          <span key={mi} className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                            ✓ {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.revenue_roadmap && (
            <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign size={18} className="text-green-400" />
                <h2 className="font-bold text-white">Revenue Roadmap</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { label: 'Monthly Goal', value: results.revenue_roadmap.monthly_goal, color: 'text-green-400' },
                  { label: 'Clients Needed', value: results.revenue_roadmap.clients_needed, color: 'text-white' },
                  { label: 'Leads/Week', value: results.revenue_roadmap.leads_needed_weekly, color: 'text-brand-400' },
                  { label: 'Conversion Rate', value: results.revenue_roadmap.conversion_rate_needed, color: 'text-white' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="bg-[#0f0f14] rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                    <p className={`text-sm font-bold ${color}`}>{value}</p>
                  </div>
                ))}
              </div>
              {results.revenue_roadmap.primary_revenue_actions && (
                <div>
                  <p className="text-xs text-gray-500 mb-2">Primary Revenue Actions</p>
                  <ul className="space-y-1.5">
                    {results.revenue_roadmap.primary_revenue_actions.map((a, i) => (
                      <li key={i} className="text-sm text-gray-400 flex gap-2">
                        <span className="text-green-400">$</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {results.daily_checklist && (
            <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckSquare size={18} className="text-brand-400" />
                <h2 className="font-bold text-white">Daily Non-Negotiables</h2>
              </div>
              <div className="space-y-2">
                {results.daily_checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#0f0f14] rounded-lg px-4 py-3">
                    <div className="w-5 h-5 rounded border border-white/10 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-200">{item.action}</p>
                      <div className="flex gap-3 mt-0.5">
                        <span className="text-xs text-gray-600">{item.time}</span>
                        <span className="text-xs text-gray-600">{item.duration} min</span>
                        {item.platform && <span className="text-xs text-brand-600">{item.platform}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.viral_content_calendar && (
            <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6">
              <h2 className="font-bold text-white mb-4">Weekly Content Calendar</h2>
              <div className="grid grid-cols-7 gap-2">
                {Object.entries(results.viral_content_calendar).map(([day, theme]) => (
                  <div key={day} className="bg-[#0f0f14] rounded-lg p-2 text-center">
                    <p className="text-xs text-gray-500 font-medium mb-1 capitalize">{day.slice(0, 3)}</p>
                    <p className="text-xs text-gray-300 leading-tight">{theme}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.success_metrics && (
            <div className="bg-brand-600/5 border border-brand-600/20 rounded-xl p-5">
              <h2 className="font-bold text-brand-300 mb-3">Track These Metrics</h2>
              <div className="grid grid-cols-2 gap-2">
                {results.success_metrics.map((metric, i) => (
                  <div key={i} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-brand-400">→</span> {metric}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
