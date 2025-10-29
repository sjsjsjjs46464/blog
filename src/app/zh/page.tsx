import { Container } from '@/components/layout/Container'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headlineZh, introductionZh } from '@/config/infoConfig'
import { BlogCard } from '@/components/home/BlogCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import {
  projectHeadLineZh,
  projectIntroZh,
  projectsZh,
  blogHeadLineZh,
  blogIntroZh,
  techIcons,
} from '@/config/infoConfig'
import {
  awardsZh,
  awardsHeadLineZh,
  awardsIntroZh,
  activitiesZh,
  activitiesHeadLineZh,
  activitiesIntroZh,
} from '@/config/projects'
import IconCloud from '@/components/ui/icon-cloud'
import { Award, Briefcase, Heart } from 'lucide-react'

export default async function Home() {
  let blogList = (await getAllBlogs('zh')).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className="md:mt-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
              {headlineZh}
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              {introductionZh}
            </p>
            <SocialLinks className="md:mt-24" />
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>

        {/* Awards */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Award size={28} />
            {awardsHeadLineZh}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {awardsIntroZh}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {awardsZh.map((award) => (
              <ActivityCard key={award.name} activity={award} titleAs="h3" />
            ))}
          </ul>
        </div>

        {/* Research & Projects */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Briefcase size={28} />
            {projectHeadLineZh}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {projectIntroZh}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projectsZh.map((project) => (
              <ProjectCard key={project.name} project={project} titleAs="h3" />
            ))}
          </ul>
        </div>

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

        {/* Blog Section */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 py-8 my-8 lg:max-w-none border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            {blogHeadLineZh}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {blogIntroZh}
          </p>
        </div>

        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {blogList.map((blog: BlogType) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Career />
            <Education />
          </div>
        </div>
      </Container>
    </>
  )
}