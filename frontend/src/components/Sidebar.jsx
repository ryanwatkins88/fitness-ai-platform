import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, FileText, MessageSquare, Users, TrendingUp, LogOut, Dumbbell } from 'lucide-react'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/content', icon: FileText, label: 'Content Generator' },
  { to: '/scripts', icon: MessageSquare, label: 'Scripts' },
  { to: '/groups', icon: Users, label: 'Group Finder' },
  { to: '/strategy', icon: TrendingUp, label: 'Strategy Builder' },
]

export default function Sidebar() {
  const navigate = useNavigate()

  function resetProfile() {
    if (confirm('Reset your coach profile? This will clear all saved data.')) {
      localStorage.removeItem('coachProfile')
      navigate('/onboarding')
    }
  }

  return (
    <aside className="w-64 flex-shrink-0 bg-[#16161e] border-r border-white/5 flex flex-col">
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center">
            <Dumbbell size={20} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-white text-sm leading-tight">FitCoach AI</p>
            <p className="text-xs text-gray-500">Growth Platform</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-600/20 text-brand-400 border border-brand-600/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button
          onClick={resetProfile}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-colors w-full"
        >
          <LogOut size={18} />
          Reset Profile
        </button>
      </div>
    </aside>
  )
}
