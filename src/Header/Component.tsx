import type { Header } from '@/payload-types'
import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

export async function Header() {
  const globalData = await getCachedGlobal('header', 1)()
  const headerData = globalData as Header

  return <HeaderClient data={headerData} />
}
