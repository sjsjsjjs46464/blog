export * from '@/config/projects'
export * from '@/config/education'
export * from '@/config/career'

// personal info
export const name = '.?l?.?h?.?x.'
export const headline = 'Students of China University of Petroleum.'
export const introduction =
  "Coucou Les Amis! My name is Xue Zi. I'm from Beijing."
export const email = '3089984487@qq.com'
export const githubUsername = 'XueZi'

export const nameZh = '.?l?.?h?.?x.'
export const headlineZh = '见习玩家'
export const introductionZh =
  "你好！我是lhx，来自北京-皇城根儿。"

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Xue Zi. I'm from Beijing.",
  "I am currently a Students of China University of Petroleum, where I am pursuing my passion for computer science and technology.",
]

export const aboutMeHeadlineZh = '111111111111'
export const aboutParagraphsZh = [
  "#2VQ8YQG0",
  "我艾德加506杯你说我不会玩？",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

export const blogHeadLineZh = "我没有一些想法！@#！@#"
export const blogIntroZh =
  "我写了一些关于个人troubleshooting的文章，以及一些个人的想法。"

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
    href: '【【官方 MV】Never Gonna Give You Up - Rick Astley】 https://www.bilibili.com/video/BV1GJ411x7h7/?share_source=copy_web&vd_source=65d432b9ea746248c3d8655684393b1b',
  },
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/sjsjsjjs46464',
  },
  {
    name: 'WeChat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/C_aiWx88JBw_OvQ-IPsc2A',
  },
  {
    name: 'YouTube',
    icon: 'YouTube',
    href: 'https://www.youtube.com/feed/you',
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
