'use client'

import * as React from 'react'
import { Translate } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname() || '/'
  const isZh = pathname.startsWith('/zh')
  const targetPath = isZh
    ? pathname.replace(/^\/zh(?=\/|$)/, '') || '/'
    : '/zh' + (pathname === '/' ? '' : pathname)

  return ( 
    <Link
      href={targetPath}
      className="text-md group flex flex-row items-center justify-start font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      prefetch={false}
      scroll={false}
    >
      <Translate size={18} />
      <span className="sr-only">Language Switcher</span>
    </Link>
  )
}