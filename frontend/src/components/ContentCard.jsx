import { useState } from 'react'
import { Copy, Check, Zap, Clock } from 'lucide-react'

const viralColors = {
  'Very High': 'bg-green-500/20 text-green-400 border-green-500/30',
  'High': 'bg-brand-500/20 text-brand-400 border-brand-500/30',
  'Medium': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
}

export default function ContentCard({ piece, index }) {
  const [copied, setCopied] = useState(false)

  async function copyContent() {
    await navigator.clipboard.writeText(piece.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-brand-600/20 border border-brand-600/30 flex items-center justify-center text-brand-400 text-xs font-bold">
            {index + 1}
          </span>
          <h3 className="font-semibold text-white">{piece.title}</h3>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border flex items-center gap-1 ${viralColors[piece.viral_potential] || viralColors['Medium']}`}>
          <Zap size={11} />
          {piece.viral_potential}
        </span>
      </div>

      <div className="bg-[#0f0f14] rounded-lg p-4 relative group">
        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{piece.content}</p>
        <button
          onClick={copyContent}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-all opacity-0 group-hover:opacity-100"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>

      {piece.hashtags && piece.hashtags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {piece.hashtags.map((tag) => (
            <span key={tag} className="text-xs text-brand-400 bg-brand-600/10 px-2 py-0.5 rounded-full">
              #{tag.replace(/^#/, '')}
            </span>
          ))}
        </div>
      )}

      <div className="bg-brand-600/5 border border-brand-600/10 rounded-lg p-3">
        <p className="text-xs text-brand-300 font-medium mb-1">Why it works</p>
        <p className="text-xs text-gray-400 leading-relaxed">{piece.why_it_works}</p>
      </div>

      {piece.best_time_to_post && (
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Clock size={12} />
          <span>Best time: {piece.best_time_to_post}</span>
        </div>
      )}
    </div>
  )
}
