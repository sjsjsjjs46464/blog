'use client'

import useSWR from 'swr'
import { useEffect } from 'react'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ViewCounter() {
  const { data, error } = useSWR('/api/views', fetcher)
  const views = data?.views

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

  return (
    <p className="text-sm text-muted-foreground">
      {views ? `${Number(views).toLocaleString()} views` : '... views'}
    </p>
  )
}
