import { type Metadata } from 'next'
import { nameZh, headlineZh, introductionZh } from '@/config/infoConfig'

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

export default function ZhLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}