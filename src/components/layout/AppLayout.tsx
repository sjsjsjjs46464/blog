'use client'

import { usePathname } from 'next/navigation'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const lang = pathname.startsWith('/zh') ? 'zh' : 'en'

  return (
    <Providers attribute="class" defaultTheme="system" enableSystem lang={lang}>
      <div className="flex w-full">
        <Layout>{children}</Layout>
      </div>
    </Providers>
  )
}