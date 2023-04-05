import { email, token } from '~/logic/storage'

const GEORIDE_ENDPOINT = 'https://api.georide.com'

const BASE_HEADERS = {
  headers: {
    Authorization: `Bearer ${token.value}`,
  },
}

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
      ...BASE_HEADERS,
    }).then(r => r.json())
      .then((r) => {
        return r
      })
  }

  return { getToken, getTrackers }
}
