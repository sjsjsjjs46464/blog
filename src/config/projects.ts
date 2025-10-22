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

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'WXchat',
    description: 'A mini program designed to provide various campus services for students.',
    link: { href: 'https://github.com/Mist-wu/WXchatAI', label: 'GitHub Repository' },
    tags: ['Python', 'wxauto', 'Flask'],
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
