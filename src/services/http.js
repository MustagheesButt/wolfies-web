export class Http {
  static async get(endpoint) {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`)
    return await resp.json()
  }
}