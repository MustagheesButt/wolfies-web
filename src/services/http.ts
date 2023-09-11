import { R } from "@/res/R"

export class Http {
  static async get(endpoint: string) {
    const resp = await fetch(`${R.constants.API_URL}${endpoint}`)
    return await resp.json()
  }

  static async post(endpoint: string, data: any) {
    const resp = await fetch(`${R.constants.API_URL}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return await resp.json()
  }
}