import { useState } from 'react'
import { Sparkles, Copy, Check } from 'lucide-react'
import { generateScript } from '../api/client'
import LoadingSpinner from '../components/LoadingSpinner'

const SCRIPT_TYPES = [
  { id: 'dm_opener', label: 'DM Opener' },
  { id: 'sales_call', label: 'Sales Call' },
  { id: 'objection_handler', label: 'Objection Handler' },
  { id: 'follow_up', label: 'Follow-Up Sequence' },
]

const PLATFORMS = ['Instagram', 'Facebook', 'TikTok', 'Threads']

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={copy} className="p-1.5 rounded text-gray-500 hover:text-white hover:bg-white/10 transition-all">
      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
    </button>
  )
}

function renderResults(data) {
  if (!data) return null

  if (data.scripts) {
    return (
      <div className="space-y-4">
        {data.scripts.map((s, i) => (
          <div key={i} className="bg-[#1e1e2a] border border-white/5 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">{s.name}</h3>
              <CopyButton text={s.message} />
            </div>
            <p className="text-xs text-gray-500">{s.when_to_use}</p>
            <div className="bg-[#0f0f14] rounded-lg p-4">
              <p className="text-gray-300 text-sm whitespace-pre-wrap">{s.message}</p>
            </div>
            {s.follow_up && (
              <div className="bg-brand-600/5 border border-brand-600/10 rounded-lg p-3">
                <p className="text-xs text-brand-400 font-medium mb-1">Follow-up if they respond</p>
                <p className="text-xs text-gray-400">{s.follow_up}</p>
              </div>
            )}
          </div>
        ))}
        {data.pro_tips && (
          <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-5">
            <h3 className="font-semibold text-white mb-3">Pro Tips</h3>
            <ul className="space-y-2">
              {data.pro_tips.map((tip, i) => (
                <li key={i} className="text-sm text-gray-400 flex gap-2">
                  <span className="text-brand-400 mt-0.5">→</span> {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  if (data.sections) {
    return (
      <div className="space-y-4">
        {data.sections.map((s, i) => (
          <div key={i} className="bg-[#1e1e2a] border border-white/5 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">{s.section}</h3>
                <p className="text-xs text-gray-500 mt-0.5">~{s.duration}</p>
              </div>
              <CopyButton text={s.script} />
            </div>
            <div className="bg-[#0f0f14] rounded-lg p-4">
              <p className="text-gray-300 text-sm whitespace-pre-wrap">{s.script}</p>
            </div>
            {s.notes && (
              <p className="text-xs text-gray-500 italic">{s.notes}</p>
            )}
          </div>
        ))}
        {data.power_phrases && (
          <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-5">
            <h3 className="font-semibold text-white mb-3">Power Phrases</h3>
            <div className="flex flex-wrap gap-2">
              {data.power_phrases.map((phrase, i) => (
                <span key={i} className="bg-brand-600/10 text-brand-300 text-xs px-3 py-1.5 rounded-full border border-brand-600/20">
                  "{phrase}"
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  if (data.objections) {
    return (
      <div className="space-y-4">
        {data.objections.map((o, i) => (
          <div key={i} className="bg-[#1e1e2a] border border-white/5 rounded-xl p-5 space-y-3">
            <h3 className="font-semibold text-white">"{o.objection}"</h3>
            <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-3">
              <p className="text-xs text-yellow-400 font-medium mb-1">Why they really say this</p>
              <p className="text-xs text-gray-400">{o.psychology}</p>
            </div>
            <div className="bg-[#0f0f14] rounded-lg p-4 relative group">
              <p className="text-gray-300 text-sm whitespace-pre-wrap">{o.response}</p>
              <div className="absolute top-3 right-3"><CopyButton text={o.response} /></div>
            </div>
            {o.follow_up && (
              <div className="bg-brand-600/5 border border-brand-600/10 rounded-lg p-3">
                <p className="text-xs text-brand-400 font-medium mb-1">Then say</p>
                <p className="text-xs text-gray-400">{o.follow_up}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  if (data.messages) {
    return (
      <div className="space-y-4">
        {data.messages.map((m, i) => (
          <div key={i} className="bg-[#1e1e2a] border border-white/5 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-600/20 border border-brand-600/30 flex items-center justify-center text-brand-400 text-xs font-bold">
                  {m.day}
                </span>
                <div>
                  <span className="text-sm text-gray-300 font-medium">Day {m.day}</span>
                  <span className="text-xs text-gray-500 ml-2">{m.purpose}</span>
                </div>
              </div>
              <CopyButton text={m.message} />
            </div>
            <div className="bg-[#0f0f14] rounded-lg p-4">
              <p className="text-gray-300 text-sm whitespace-pre-wrap">{m.message}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <pre className="bg-[#1e1e2a] rounded-xl p-4 text-sm text-gray-400 overflow-auto">
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default function ScriptGenerator() {
  const [scriptType, setScriptType] = useState('dm_opener')
  const [platform, setPlatform] = useState('Instagram')
  const [objection, setObjection] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')

  async function generate() {
    setLoading(true)
    setError('')
    setResults(null)
    try {
      const data = await generateScript({
        script_type: scriptType,
        platform: platform || undefined,
        objection: objection || undefined,
      })
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
        <h1 className="text-2xl font-bold text-white">Script Generator</h1>
        <p className="text-gray-400 mt-1 text-sm">Sales scripts, DM openers & objection handlers tailored to your offer</p>
      </div>

      <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6 space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-300 mb-3">Script Type</p>
          <div className="flex gap-2 flex-wrap">
            {SCRIPT_TYPES.map(t => (
              <button
                key={t.id}
                onClick={() => setScriptType(t.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scriptType === t.id
                    ? 'bg-brand-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {(scriptType === 'dm_opener' || scriptType === 'follow_up') && (
          <div>
            <p className="text-sm font-medium text-gray-300 mb-3">Platform</p>
            <div className="flex gap-2 flex-wrap">
              {PLATFORMS.map(p => (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    platform === p
                      ? 'bg-brand-600/30 text-brand-300 border border-brand-600/40'
                      : 'bg-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {scriptType === 'objection_handler' && (
          <div>
            <p className="text-sm font-medium text-gray-300 mb-2">Custom Objection (optional)</p>
            <input
              type="text"
              value={objection}
              onChange={e => setObjection(e.target.value)}
              placeholder="e.g. I need to lose 10lbs first before investing in coaching"
              className="w-full bg-[#0f0f14] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>
        )}

        <button
          onClick={generate}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors"
        >
          <Sparkles size={18} />
          Generate Scripts
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      {loading && <LoadingSpinner message="Writing your scripts..." />}

      {results && renderResults(results)}
    </div>
  )
}
