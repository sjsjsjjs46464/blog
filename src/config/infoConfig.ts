export * from '@/config/projects'
export * from '@/config/education'
export * from '@/config/career'

// personal info
export const name = 'Xue Zi'
export const headline = 'Student at Beijing University of Posts and Telecommunications.'
export const introduction =
  "Coucou Les Amis! My name is Xue Zi. I'm from Beijing."
export const email = '2550166270@qq.com'
export const githubUsername = 'XueZi'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Xue Zi. I'm from Beijing.",
  "I am currently a student at Beijing University of Posts and Telecommunications, where I am pursuing my passion for computer science and technology.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/MS4wLjABAAAA0bHQ-7Q6d64ziY6uGTNPj6IioOh9LxqbyZw9f9SbisjHBOpCecQMwj9shEDrJ-Mp?from_tab_name=main',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/499802523?spm_id_from=333.1007.0.0',
  },
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/Mist-wu',
  },
  {
    name: 'WeChat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/C_aiWx88JBw_OvQ-IPsc2A',
  }
]

// https://simpleicons.org/
export type TechIcon = {
  slug: string
  title: string
}

export const techIcons: TechIcon[] = [
  { slug: 'typescript', title: 'TypeScript' },
  { slug: 'javascript', title: 'JavaScript' },
  { slug: 'supabase', title: 'Supabase' },
  { slug: 'cloudflare', title: 'Cloudflare' },
  { slug: 'java', title: 'Java' },
  { slug: 'oracle', title: 'Oracle' },
  { slug: 'mysql', title: 'MySQL' },
  { slug: 'react', title: 'React' },
  { slug: 'nodedotjs', title: 'Node.js' },
  { slug: 'nextdotjs', title: 'Next.js' },
  { slug: 'prisma', title: 'Prisma' },
  { slug: 'postgresql', title: 'PostgreSQL' },
  { slug: 'nginx', title: 'Nginx' },
  { slug: 'vercel', title: 'Vercel' },
  { slug: 'docker', title: 'Docker' },
  { slug: 'git', title: 'Git' },
  { slug: 'github', title: 'GitHub' },
  { slug: 'visualstudiocode', title: 'VS Code' },
  { slug: 'androidstudio', title: 'Android Studio' },
  { slug: 'ios', title: 'iOS' },
  { slug: 'apple', title: 'Apple' },
  { slug: 'wechat', title: 'WeChat' },
]
