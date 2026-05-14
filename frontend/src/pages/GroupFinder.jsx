import { useState } from 'react'
import { Search, Sparkles, Hash, Users } from 'lucide-react'
import { findGroups } from '../api/client'
import LoadingSpinner from '../components/LoadingSpinner'

const PLATFORMS = ['Facebook', 'Instagram', 'TikTok', 'Threads']

export default function GroupFinder() {
  const [selected, setSelected] = useState(['Facebook', 'Instagram'])
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')

  function togglePlatform(p) {
    setSelected(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    )
  }

  async function find() {
    if (selected.length === 0) return
    setLoading(true)
    setError('')
    setResults(null)
    try {
      const data = await findGroups({ platforms: selected })
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
        <h1 className="text-2xl font-bold text-white">Group Finder</h1>
        <p className="text-gray-400 mt-1 text-sm">Discover where your ideal clients hang out and how to attract them</p>
      </div>

      <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6 space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-300 mb-3">Select Platforms</p>
          <div className="flex gap-3 flex-wrap">
            {PLATFORMS.map(p => (
              <button
                key={p}
                onClick={() => togglePlatform(p)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  selected.includes(p)
                    ? 'bg-brand-600/20 text-brand-300 border-brand-600/40'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                {selected.includes(p) && <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />}
                {p}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={find}
          disabled={loading || selected.length === 0}
          className="flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors"
        >
          <Search size={18} />
          Find My Communities
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      {loading && <LoadingSpinner message="Finding your ideal communities..." />}

      {results && (
        <div className="space-y-6">
          {results.platforms?.map((platform, pi) => (
            <div key={pi} className="space-y-4">
              <h2 className="font-bold text-white text-lg border-b border-white/10 pb-2">{platform.platform}</h2>

              <div className="space-y-3">
                {platform.group_types?.map((group, gi) => (
                  <div key={gi} className="bg-[#1e1e2a] border border-white/5 rounded-xl p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <Users size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white">{group.type}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{group.why_ideal}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.examples?.map((ex, ei) => (
                        <span key={ei} className="bg-white/5 text-gray-400 text-xs px-2.5 py-1 rounded-full border border-white/10">
                          {ex}
                        </span>
                      ))}
                    </div>
                    <div className="bg-brand-600/5 border border-brand-600/10 rounded-lg p-3">
                      <p className="text-xs text-brand-400 font-medium mb-1">Engagement Strategy</p>
                      <p className="text-xs text-gray-400">{group.engagement_strategy}</p>
                    </div>
                  </div>
                ))}
              </div>

              {platform.hashtag_strategy && (
                <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Hash size={16} className="text-brand-400" />
                    <h3 className="font-semibold text-white">Hashtag Strategy</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-500 mb-1.5">Niche Hashtags</p>
                      <div className="flex flex-wrap gap-1.5">
                        {platform.hashtag_strategy.niche_hashtags?.map(tag => (
                          <span key={tag} className="bg-brand-600/10 text-brand-300 text-xs px-2 py-0.5 rounded-full">#{tag.replace(/^#/, '')}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1.5">Broad Hashtags</p>
                      <div className="flex flex-wrap gap-1.5">
                        {platform.hashtag_strategy.broad_hashtags?.map(tag => (
                          <span key={tag} className="bg-white/5 text-gray-400 text-xs px-2 py-0.5 rounded-full">#{tag.replace(/^#/, '')}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{platform.hashtag_strategy.how_to_use}</p>
                </div>
              )}

              {platform.content_that_gets_shared && (
                <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-3">Content That Gets Shared</h3>
                  <ul className="space-y-2">
                    {platform.content_that_gets_shared.map((idea, i) => (
                      <li key={i} className="text-sm text-gray-400 flex gap-2">
                        <Sparkles size={14} className="text-brand-400 mt-0.5 flex-shrink-0" />
                        {idea}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {results.outreach_approach && (
            <div className="bg-brand-600/5 border border-brand-600/20 rounded-xl p-5">
              <h3 className="font-semibold text-brand-300 mb-2">Overall Approach</h3>
              <p className="text-sm text-gray-300">{results.outreach_approach}</p>
            </div>
          )}

          {results.red_flags_to_avoid && (
            <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-5">
              <h3 className="font-semibold text-red-400 mb-3">Mistakes to Avoid</h3>
              <ul className="space-y-2">
                {results.red_flags_to_avoid.map((flag, i) => (
                  <li key={i} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-red-400">✗</span> {flag}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
