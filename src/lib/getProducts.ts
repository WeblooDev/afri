// src/lib/getProducts.ts
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function fetchAllProducts() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'products',
    depth: 2,
    pagination: false,
  })

  return docs
}
