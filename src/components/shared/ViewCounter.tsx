'use client'

import useSWR from 'swr'
import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ViewCounter() {
  const { data, error } = useSWR('/api/views', fetcher)
  const views = data?.views
  const lang = useLanguage()
  const isZh = lang === 'zh'

  useEffect(() => {
    const registerView = () =>
      fetch('/api/views', {
        method: 'POST',
      })

    registerView()
  }, [])

  if (error) {
    return <div>Error loading views</div>
  }
  
  const viewsText = isZh ? '浏览' : 'views'
  const loadingText = isZh ? '... 浏览' : '... views'

  return (
    <p className="text-sm text-muted-foreground">
      {views ? `${Number(views).toLocaleString()} ${viewsText}` : loadingText}
    </p>
  )
}