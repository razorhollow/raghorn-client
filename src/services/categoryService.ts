//services
import * as tokenService from "./tokenService"

//types
import { Category } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/categories`

async function index(): Promise<Category[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Category[]
  } catch (error) {
    throw error
  }
}

export { index }