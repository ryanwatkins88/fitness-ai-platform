import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import ContentGenerator from './pages/ContentGenerator'
import ScriptGenerator from './pages/ScriptGenerator'
import GroupFinder from './pages/GroupFinder'
import StrategyBuilder from './pages/StrategyBuilder'

function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-[#0f0f14]">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}

function RequireProfile({ children }) {
  const profile = localStorage.getItem('coachProfile')
  if (!profile) return <Navigate to="/onboarding" replace />
  return children
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/"
          element={
            <RequireProfile>
              <Layout><Dashboard /></Layout>
            </RequireProfile>
          }
        />
        <Route
          path="/content"
          element={
            <RequireProfile>
              <Layout><ContentGenerator /></Layout>
            </RequireProfile>
          }
        />
        <Route
          path="/scripts"
          element={
            <RequireProfile>
              <Layout><ScriptGenerator /></Layout>
            </RequireProfile>
          }
        />
        <Route
          path="/groups"
          element={
            <RequireProfile>
              <Layout><GroupFinder /></Layout>
            </RequireProfile>
          }
        />
        <Route
          path="/strategy"
          element={
            <RequireProfile>
              <Layout><StrategyBuilder /></Layout>
            </RequireProfile>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
