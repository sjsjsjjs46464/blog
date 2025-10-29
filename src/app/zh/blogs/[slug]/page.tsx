import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getBlogBySlug } from '@/lib/blogs'
import { getMDXContent } from '@/lib/mdx'
import { BlogLayout } from '@/components/layout/BlogLayout'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug, 'zh')
  if (!blog) {
    return {
      title: '文章未找到',
    }
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

export default async function BlogPage({ params }: Props) {
  const blog = await getBlogBySlug(params.slug, 'zh')
  
  if (!blog) {
    notFound()
  }

  const content = await getMDXContent(params.slug, 'zh')

  return (
    <BlogLayout
        blog={blog}
    >
      <div className="mt-8 prose dark:prose-invert">
        {content}
      </div>
    </BlogLayout>
  )
}
