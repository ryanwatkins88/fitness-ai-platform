import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { generateContent } from '../api/client'
import LoadingSpinner from '../components/LoadingSpinner'
import ContentCard from '../components/ContentCard'

const PLATFORMS = ['Facebook', 'Instagram', 'TikTok', 'Threads']

const CONTENT_TYPES = {
  Facebook: ['Story Post', 'Value Post', 'Testimonial Post', 'Controversy Post', 'Question Post'],
  Instagram: ['Caption', 'Reel Hook', 'Carousel Script', 'Story Sequence', 'Bio Pitch'],
  TikTok: ['Hook Script', 'Tutorial Script', 'Story Video', 'POV Script', 'Trend Hijack'],
  Threads: ['Thread', 'Single Post', 'Story', 'Hot Take', 'Value Bomb'],
}

export default function ContentGenerator() {
  const [platform, setPlatform] = useState('Instagram')
  const [contentType, setContentType] = useState('Caption')
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')

  async function generate() {
    setLoading(true)
    setError('')
    setResults(null)
    try {
      const data = await generateContent({ platform, content_type: contentType, topic: topic || undefined })
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
        <h1 className="text-2xl font-bold text-white">Content Generator</h1>
        <p className="text-gray-400 mt-1 text-sm">Generate 3 viral posts customized to your niche and voice</p>
      </div>

      <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6 space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-300 mb-3">Platform</p>
          <div className="flex gap-2 flex-wrap">
            {PLATFORMS.map(p => (
              <button
                key={p}
                onClick={() => { setPlatform(p); setContentType(CONTENT_TYPES[p][0]) }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  platform === p
                    ? 'bg-brand-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-300 mb-3">Content Type</p>
          <div className="flex gap-2 flex-wrap">
            {CONTENT_TYPES[platform].map(t => (
              <button
                key={t}
                onClick={() => setContentType(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  contentType === t
                    ? 'bg-brand-600/30 text-brand-300 border border-brand-600/40'
                    : 'bg-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-300 mb-2">Topic (optional)</p>
          <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            placeholder="e.g. why most diets fail, my client's transformation, the biggest mistake I see..."
            className="w-full bg-[#0f0f14] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>

        <button
          onClick={generate}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-medium rounded-lg transition-colors"
        >
          <Sparkles size={18} />
          Generate 3 Viral Posts
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      {loading && <LoadingSpinner message="Crafting your viral content..." />}

      {results && (
        <div className="space-y-4">
          <h2 className="font-semibold text-white">Your {platform} {contentType}s</h2>
          {results.pieces?.map((piece, i) => (
            <ContentCard key={i} piece={piece} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
