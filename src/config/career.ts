// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
        {
      company: 'Home',
      title: 'Independent developer',
      logo: 'coffee',
      start: '2025',
      end: 'present'
    }
]
  
export const careerListZh: Array<CareerItemType> = [
        {
      company: '个人',
      title: '独立开发者',
      logo: 'coffee',
      start: '2025',
      end: '现在'
    }
  ]