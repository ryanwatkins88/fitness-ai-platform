import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 120000,
})

export function getCoachProfile() {
  const raw = localStorage.getItem('coachProfile')
  return raw ? JSON.parse(raw) : null
}

export async function generateContent({ platform, content_type, topic }) {
  const coach = getCoachProfile()
  const { data } = await api.post('/content/generate', { coach, platform, content_type, topic })
  return data
}

export async function generateScript({ script_type, platform, objection }) {
  const coach = getCoachProfile()
  const { data } = await api.post('/scripts/generate', { coach, script_type, platform, objection })
  return data
}

export async function findGroups({ platforms }) {
  const coach = getCoachProfile()
  const { data } = await api.post('/groups/find', { coach, platforms })
  return data
}

export async function buildStrategy({ duration_days }) {
  const coach = getCoachProfile()
  const { data } = await api.post('/strategy/build', { coach, duration_days })
  return data
}
