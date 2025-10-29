'use client'

import { Card } from '@/components/shared/Card'
import { type BlogType } from '@/lib/blogs'
import { formatDate } from '@/lib/formatDate'
import { useLanguage } from '@/contexts/LanguageContext'

export function BlogItem({ blog }: { blog: BlogType }) {
  const lang = useLanguage()
  const href = lang === 'zh' ? `/zh/blogs/${blog.slug}` : `/blogs/${blog.slug}`
  const cta = lang === 'zh' ? '阅读文章' : 'Read blog'

  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={href}>
          {blog.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date, lang)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>{cta}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date, lang)}
      </Card.Eyebrow>
    </article>
  )
}
