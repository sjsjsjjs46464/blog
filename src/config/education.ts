
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'BUPT',
      major: 'AI & Computer Science',
      logo: 'college',
      start: '2024',
      end: 'present'
    },
    {
      school: 'Beijing 57th High School',
      major: '',
      logo: 'college',
      start: '2021',
      end: '2024'
    },
]
  
  export const educationListZh: Array<EducationItemType> = [
    {
      school: '中国石油大学',
      major: '计算机网络技术',
      logo: 'college',
      start: '2024',
      end: '现在'
    },
    {
      school: '中国石油大学附属中学',
      major: 'none',
      logo: 'college',
      start: '2021',
      end: '2024'
    },
  ]