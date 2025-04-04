import { projectsInfo } from '../assets/data/Projects'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <div
      id='projects'
      className={
        `flex flex-col items-center py-15`
      }
    >
      <h2
        className={
          "text-[28px] cursor-context-menu transition duration-300 hover:text-amber-50"
        }
      >
        Projects
      </h2>
      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4 py-10 w-19/20 justify-center place-items-center"
      >
        {
          projectsInfo.length > 0 && projectsInfo.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                item={item}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectsSection