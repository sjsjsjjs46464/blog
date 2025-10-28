
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