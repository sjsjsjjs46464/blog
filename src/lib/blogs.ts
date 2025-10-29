import glob from 'fast-glob'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogType = {
  title: string
  description: string
  author: string
  date: string
  slug: string
}

async function importBlog(
  blogFilename: string,
  lang: 'en' | 'zh' = 'en'
): Promise<BlogType> {
  const contentDir = lang === 'zh' ? 'src/contentZh/blog' : 'src/content/blog';
  const source = await fs.readFile(
    path.join(process.cwd(), contentDir, blogFilename),
    'utf-8'
  )
  
  const { data } = matter(source)
  
  // @ts-expect-error
  return {
    slug: blogFilename.replace(/\.mdx$/, ''),
    ...data,
  }
}

export async function getAllBlogs(lang: 'en' | 'zh' = 'en') {
  const contentDir = lang === 'zh' ? './src/contentZh/blog' : './src/content/blog';
  let blogFileNames = await glob('*.mdx', {
    cwd: contentDir,
  })

  let blogs = await Promise.all(blogFileNames.map((file) => importBlog(file, lang)))

  return blogs.sort((a, z) => {
    const aDate = a.date ? +new Date(a.date) : 0;
    const zDate = z.date ? +new Date(z.date) : 0;
    return zDate - aDate;
  })
}

export async function getBlogBySlug(slug: string, lang: 'en' | 'zh' = 'en'): Promise<BlogType | null> {
  try {
    // 移除可能存在的 .mdx 扩展名
    const cleanSlug = slug.replace(/\.mdx$/, '')
    return await importBlog(`${cleanSlug}.mdx`, lang)
  } catch (error) {
    console.error(`Failed to load blog with slug: ${slug}`, error)
    return null
  }
}