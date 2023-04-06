import { email, token } from '~/logic/storage'

const GEORIDE_ENDPOINT = 'https://api.georide.com'

export default function useGeoride() {
  const getToken = (password: string) => {
    return fetch(`${GEORIDE_ENDPOINT}/user/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password,
      }),
    })
  }

  const getTrackers = async () => {
    return fetch(`${GEORIDE_ENDPOINT}/user/trackers`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then(r => r.json())
      .then((r) => {
        return r
      })
  }

  const getEvents = async (trackerID: string) => {
    const now = Date.now()
    const nowLess5Days = now - (5 * 24 * 60 * 60 * 1000)

    const START_EVENTS = new Date(nowLess5Days).toISOString().substring(0, 10)
    const END_EVENTS = new Date(now).toISOString().substring(0, 10)

    return fetch(`${GEORIDE_ENDPOINT}/tracker/${trackerID}/events?from=${START_EVENTS}&to=${END_EVENTS}&results=10&page=1`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }).then(r => r.json())
      .then((r) => {
        return r
      })
  }

  const toggleLock = async (trackerID: string) => {
    return fetch(`${GEORIDE_ENDPOINT}/tracker/${trackerID}/toggleLock`, {
      method: 'POST',
    })
  }

  return { getToken, getTrackers, getEvents, toggleLock }
}
