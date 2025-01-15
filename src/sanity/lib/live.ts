import 'server-only'

import { client } from '@/sanity/lib/client'
import { defineLive } from 'next-sanity'

const token = process.env.SANITY_API_READ_TOKEN
if (!token) {
  throw new Error('SANITY_API_READ_TOKEN is missing')
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
