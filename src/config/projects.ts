// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Runner-up in the CCBC',
    description: 'China Collegiate BrawlStars Championship',
    date: '2025',
    location: 'BUPT, Beijing',
  },
  {
    name: 'Beijing Outstanding Student',
    description: 'Unexpected yet reasonable',
    date: '2017',
    location: 'Haidian, Beijing',
  },
]

export const awardsHeadLineZh = "奖项与荣誉"
export const awardsIntroZh = "对学术和专业成就的认可。"

export const awardsZh: Array<ActivityItemType> = [
  {
    name: 'CCBC 亚军',
    description: '荒野乱斗高校联赛',
    date: '2025',
    location: '北京邮电大学',
  },
  {
    name: '北京市三好学生',
    description: '',
    date: '2017',
    location: '双榆树中心小学',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'WXchat',
    description: 'A mini program designed to provide various campus services for students.',
    link: { href: 'github.com/Mist-wu/chat_server', label: 'GitHub Repository' },
    tags: ['Python', 'wxauto', 'Flask', "MySQL"],
  },
]

export const projectHeadLineZh = "研究与项目"
export const projectIntroZh = "我参与的学术研究和技术项目。"

export const projectsZh: Array<ProjectItemType> = [
  {
    name: 'WXchat',
    description: '接入AI的公众号',
    link: { href: 'github.com/Mist-wu/chat_server', label: 'GitHub Repository' },
    tags: ['Python', 'wxauto', 'Flask', "MySQL"],
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Cycling Club Member',
    description:
      'Participating in weekly cycling events and promoting a healthy lifestyle among students.',
    date: '2024 - Present',
    location: 'Beijing',
    link: '',
  },
  {
    name: 'Beijing Volunteer',
    description:
      'I regularly participate in volunteer activities organized by the Fly Young youth team, where we hike in the mountains around Beijing and collect litter left along the trails.',
    date: '2016 - Present',
    location: 'Beijing',
    link: 'https://www.bv2008.cn/app/org/view.php?id=BJm44rzq3TxFZ',
  },
]

export const activitiesHeadLineZh = "爱好与志愿者活动"
export const activitiesIntroZh = "个人兴趣和社区贡献。"

export const activitiesZh: Array<ActivityItemType> = [
  {
    name: '自行车俱乐部成员',
    description:
      '参与每周的骑行活动，倡导健康的生活方式。',
    date: '2024 - 现在',
    location: '北京',
    link: '',
  },
  {
    name: '北京志愿者',
    description:
      '我定期参加飞翔吧少年组织的志愿者活动，在北京周边的山脉中徒步旅行，并清理沿途遗留的垃圾。',
    date: '2016 - 现在',
    location: '北京',
    link: 'https://www.bv2008.cn/app/org/view.php?id=BJm44rzq3TxFZ',
  },
]
