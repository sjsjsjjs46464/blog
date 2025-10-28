
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
      school: '北京邮电大学',
      major: '人工智能与计算机科学',
      logo: 'college',
      start: '2024',
      end: '现在'
    },
    {
      school: '北京市57中学',
      major: '',
      logo: 'college',
      start: '2021',
      end: '2024'
    },
  ]