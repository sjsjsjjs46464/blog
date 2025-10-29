import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import {
  projectHeadLineZh,
  projectIntroZh,
  projectsZh,
} from '@/config/infoConfig'
import {
  activitiesZh,
  activitiesHeadLineZh,
  activitiesIntroZh,
} from '@/config/projects'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { Briefcase, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: '项目',
  description: projectHeadLineZh,
}

export default function Projects() {
  return (
    <SimpleLayout
      title={projectHeadLineZh}
      intro={projectIntroZh}
    >
      {/* Research & Projects */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 pb-10"
      >
        {projectsZh.map((project) => (
          <ProjectCard key={project.name} project={project} titleAs="h3" />
        ))}
      </ul>

      {/* Hobbies & Volunteer */}
      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
        <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
          <Heart size={28} />
          {activitiesHeadLineZh}
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mb-8">
          {activitiesIntroZh}
        </p>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {activitiesZh.map((activity) => (
            <ActivityCard
              key={activity.name}
              activity={activity}
              titleAs="h3"
            />
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}