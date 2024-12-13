import { projects } from 'config/projects'
import { Waves } from './Waves'
import { ProjectInfo } from 'types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectItem = ({ project }: { project: ProjectInfo }) => {
  const { techStacks, title, description, visitLink, repoLink, isPublic } =
    project
  return (
    <div className="flex flex-col gap-2 pt-12">
      <div className="flex items-center gap-3">
        <div className="text-lg font-semibold flex-1">{title}</div>
        {isPublic && repoLink ? (
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="hover:underline" // TODO: Add hover effect, reuse from menu and star buttons
          >
            <FontAwesomeIcon icon={faGithub} className="block" />
          </a>
        ) : (
          <FontAwesomeIcon
            icon={faGithub}
            className="text-body opacity-20 block"
            // TODO: add tooltip saying "This project is not public"
          />
        )}
        {visitLink && (
          <a
            href={visitLink}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--p)] hover:underline"
          >
            <FontAwesomeIcon icon={faExternalLink} className="block" />
          </a>
        )}
      </div>
      <div className="text-sm text-body">{description}</div>
      <div className="flex gap-2 flex-wrap">
        {techStacks.map((tech) => (
          <a href={tech.url} target="_blank" rel="noreferrer" key={tech.name}>
            <img src={tech.img} alt={tech.name} />
          </a>
        ))}
      </div>
    </div>
  )
}

export const ProjectsSection = () => {
  return (
    <div className="screen-section relative bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div id="projects" className="absolute top-0" />
      <Waves
        fill="rgb(3,7,18)"
        className="bottom-full scale-y-[60%] translate-y-[40%]"
      />
      <div className="container flex flex-col md:flex-row space-x-12">
        <div className="content-left">
          <h1 className="text-3xl font-black">
            <span className="text-[var(--p)]">P</span>rojects
          </h1>
          <div className="text-body mb-2">
            Outside of the full-time job, these are some of the projects that
            I've built as a hobby, school, or freelance works.
          </div>
          <div>
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>

        <div className="content-right"></div>
      </div>
    </div>
  )
}
