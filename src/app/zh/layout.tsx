import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { nameZh, headlineZh, introductionZh } from '@/config/infoConfig'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${nameZh}`,
    default:
      `${nameZh} - ${headlineZh}`,
  },
  description:
    `${introductionZh}`,
  alternates: {
    canonical: '/zh',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: ['/favicon-32x32.png'],
    apple: ['/apple-touch-icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Nested layouts must NOT render <html> or <body> when using the app/ router.
  // Only the root layout (src/app/layout.tsx) should render <html> and <body>.
  return (
    <Providers attribute="class" defaultTheme="system" enableSystem lang="zh">
      <div className="flex w-full">
        <Layout>{children}</Layout>
      </div>
      <Analytics />
      <SpeedInsights />
    </Providers>
  )
}
