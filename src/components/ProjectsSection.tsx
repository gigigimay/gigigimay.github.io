import { projects } from 'config/projects'
import { Waves } from './Waves'
import { ProjectInfo } from 'types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useMemo } from 'react'
import classNames from 'classnames'
import { TooltipBox } from './TooltipBox'
import { sendEvent } from 'services/ga'

const ProjectItem = ({ project }: { project: ProjectInfo }) => {
  const {
    techStacks,
    title,
    description,
    visitLink,
    repoLink,
    isPublic,
    year,
  } = project
  return (
    <div
      className={classNames(
        'flex-shrink-0 w-[400px] max-w-[calc(100vw-6rem)] bg-white/5 p-4 px-6 rounded-lg',
        'snap-start',
        'flex flex-col gap-2'
      )}
    >
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-2 md:gap-3">
        <div className="text-lg font-semibold flex-1">
          {title} <span className="font-light text-xs text-body">{year}</span>
        </div>
        <div className="flex flex-row-reverse self-start md:flex-row gap-3">
          {isPublic && repoLink ? (
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              onClick={() => {
                sendEvent('view_item', {
                  currency: 'N/A',
                  value: 0,
                  items: [
                    {
                      item_id: title,
                      item_name: title,
                      item_category: 'repoLink',
                    },
                  ],
                })
              }}
            >
              <FontAwesomeIcon icon={faGithub} className="block" />
            </a>
          ) : (
            <TooltipBox tooltipContent="Source code is private" placement="top">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-body opacity-20 block"
              />
            </TooltipBox>
          )}
          {visitLink && (
            <a
              href={visitLink}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--p)] icon-btn"
              onClick={() => {
                sendEvent('view_item', {
                  currency: 'N/A',
                  value: 0,
                  items: [
                    {
                      item_id: title,
                      item_name: title,
                      item_category: 'visitLink',
                    },
                  ],
                })
              }}
            >
              <FontAwesomeIcon icon={faExternalLink} className="block" />
            </a>
          )}
        </div>
      </div>
      <div className="text-sm text-body">{description}</div>
      <div className="flex gap-2 flex-wrap">
        {techStacks.map((tech) => (
          <a href={tech.url} target="_blank" rel="noreferrer" key={tech.name}>
            <img
              src={tech.img}
              alt={tech.name}
              className="h-5 hover:scale-110 transition-all"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export const ProjectsSection = () => {
  const sortedProjects = useMemo(
    () => projects.sort((a, b) => b.year - a.year),
    []
  )

  return (
    <div className="screen-section relative bg-gradient-to-b from-gray-950 to-gray-900 text-white pb-56">
      <div id="projects" className="absolute top-0" />
      <Waves
        fill="rgb(3,7,18)"
        className="bottom-full scale-y-[60%] translate-y-[40%]"
      />
      <div className="container">
        <h1 className="text-3xl font-black">
          <span className="text-[var(--p)]">P</span>rojects
        </h1>
        <div className="text-body mt-2 mb-4 max-w-[600px]">
          Outside of the full-time job, these are some of the projects that I've
          built as a hobby, school, or freelance works.
        </div>
        <div
          id="project-list"
          className="flex flex-nowrap gap-6 overflow-x-scroll pb-2 snap-x"
        >
          {sortedProjects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
