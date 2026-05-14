import { Link } from 'react-router-dom'
import { FileText, MessageSquare, Users, TrendingUp, Zap } from 'lucide-react'
import { getCoachProfile } from '../api/client'

const cards = [
  {
    to: '/content',
    icon: FileText,
    title: 'Content Generator',
    description: 'Create viral posts for Facebook, Instagram, TikTok & Threads that attract your ideal clients',
    color: 'from-brand-600/20 to-brand-800/10 border-brand-600/20',
    iconColor: 'text-brand-400',
  },
  {
    to: '/scripts',
    icon: MessageSquare,
    title: 'Scripts',
    description: 'DM openers, sales call scripts, objection handlers & follow-up sequences that close deals',
    color: 'from-purple-600/20 to-purple-800/10 border-purple-600/20',
    iconColor: 'text-purple-400',
  },
  {
    to: '/groups',
    icon: Users,
    title: 'Group Finder',
    description: 'Discover communities where your dream clients hang out and how to engage them',
    color: 'from-indigo-600/20 to-indigo-800/10 border-indigo-600/20',
    iconColor: 'text-indigo-400',
  },
  {
    to: '/strategy',
    icon: TrendingUp,
    title: 'Strategy Builder',
    description: 'Get a complete 30-day viral growth & revenue plan customized to your niche and offer',
    color: 'from-violet-600/20 to-violet-800/10 border-violet-600/20',
    iconColor: 'text-violet-400',
  },
]

export default function Dashboard() {
  const coach = getCoachProfile()

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Zap size={18} className="text-brand-400" />
          <span className="text-brand-400 text-sm font-medium">Ready to grow</span>
        </div>
        <h1 className="text-3xl font-bold text-white">
          Welcome back, {coach?.name?.split(' ')[0] || 'Coach'} 👋
        </h1>
        <p className="text-gray-400 mt-2">
          Your niche: <span className="text-gray-200">{coach?.niche || '—'}</span>
          {coach?.income_goal && (
            <> · Goal: <span className="text-brand-400 font-medium">{coach.income_goal}/mo</span></>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map(({ to, icon: Icon, title, description, color, iconColor }) => (
          <Link
            key={to}
            to={to}
            className={`bg-gradient-to-br ${color} border rounded-xl p-6 hover:scale-[1.02] transition-transform duration-200 group`}
          >
            <div className="flex items-start gap-4">
              <div className={`mt-0.5 ${iconColor}`}>
                <Icon size={24} />
              </div>
              <div>
                <h2 className="font-semibold text-white text-lg group-hover:text-brand-300 transition-colors">{title}</h2>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-[#1e1e2a] border border-white/5 rounded-xl p-6">
        <h3 className="font-semibold text-white mb-4">Your Profile Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500 mb-0.5">Specialty</p>
            <p className="text-gray-200">{coach?.specialty || '—'}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-0.5">Offer</p>
            <p className="text-gray-200">{coach?.offer?.name || '—'}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-0.5">Price</p>
            <p className="text-gray-200">{coach?.offer?.price || '—'}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-0.5">Income Goal</p>
            <p className="text-brand-400 font-medium">{coach?.income_goal || '—'}/mo</p>
          </div>
        </div>
      </div>
    </div>
  )
}
