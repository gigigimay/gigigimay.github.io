import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { contacts } from 'config/content'

export const ContactButtons = () => {
  return (
    <div className="mt-4 flex flex-wrap gap-4 text-[var(--p)]">
      <a
        className="icon-btn group"
        href={contacts.github}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>GitHub</span>
      </a>
      <a
        className="icon-btn group"
        href={contacts.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>LinkedIn</span>
      </a>
      <a
        className="icon-btn group"
        href={contacts.email}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Email</span>
      </a>
      <a
        className="icon-btn group"
        href={contacts.email}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFileLines} />
        <span>Resume</span>
      </a>
    </div>
  )
}
