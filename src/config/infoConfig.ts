export * from './projects'
export * from './education'
export * from './career'

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
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
