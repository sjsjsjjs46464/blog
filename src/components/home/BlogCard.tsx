'use client'

import { Card } from '@/components/shared/Card'
import { formatDate } from '@/lib/formatDate'
import { type BlogType } from '@/lib/blogs'

import { useLanguage } from '@/contexts/LanguageContext'

export function BlogCard({ blog, titleAs }: { blog: BlogType, titleAs?: keyof JSX.IntrinsicElements }) {
  const as = titleAs ?? 'h2'
  const lang = useLanguage();
  const href = lang === 'zh' ? `/zh/blogs/${blog.slug}` : `/blogs/${blog.slug}`;
  const cta = lang === 'zh' ? '阅读文章' : 'Read blog';

  return (
    <Card as="article">
      <Card.Title as={as} href={href}>
        {blog.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date, lang)}
      </Card.Eyebrow>
      <Card.Description>{blog.description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}
