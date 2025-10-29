import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { type BlogType, getAllBlogs } from '@/lib/blogs'
import { blogHeadLineZh, blogIntroZh } from '@/config/infoConfig'
import { BlogItem } from '@/components/blogs/BlogItem'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

export const metadata: Metadata = {
  title: '博客',
  description:
    blogIntroZh
}

export default async function BlogsIndex() {
  let blogs = await getAllBlogs('zh')

  return (
    <SimpleLayout
      title={blogHeadLineZh}
      intro={blogIntroZh}
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {blogs.map((blog: BlogType) => (
            <BlogItem key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
