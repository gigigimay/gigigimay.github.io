import { Parallax } from 'react-scroll-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Contact } from 'types'
import { contacts } from 'config/contact'
import groundImg from 'assets/images/ground.svg'
import bubblesImg from 'assets/images/bubbles.svg'
import octopusImg from 'assets/images/octopus.svg'
import { TooltipBox } from './TooltipBox'

const ContactButton = ({
  contact,
  delay,
}: {
  contact: Contact
  delay?: string
}) => {
  return (
    <TooltipBox
      tooltipContent={contact.name}
      tooltipClassName="bg-white text-gray-950 py-0 px-0"
      placement="bottom"
      className="contact-btn animate-jellyfish group"
      style={{ animationDelay: delay }}
    >
      <a className="" href={contact.url} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={contact.faIcon}
          className="text-4xl md:text-5xl"
        />
      </a>
    </TooltipBox>
  )
}

export const ContactSection = () => {
  return (
    <div className="screen-section pb-12 relative text-gray-950 bg-white">
      <div id="contact" className="absolute top-0" />
      {/* <Waves
        fill="white"
        className="bottom-full scale-y-[60%] translate-y-[28px]"
      /> */}
      <Parallax
        speed={-20}
        className="absolute bottom-[calc(100%-180px)] md:bottom-[calc(100%-260px)] right-4 md:right-[10rem] xl:right-[20%]"
      >
        <img src={octopusImg} className="w-[200px] md:w-[300px]" />
      </Parallax>
      <Parallax speed={10} className="absolute bottom-full left-0 right-0">
        <img
          src={bubblesImg}
          className="w-full min-h-[100px] md:min-h-[150px] object-cover object-top"
        />
      </Parallax>
      <Parallax speed={0} className="absolute bottom-full left-0 right-0">
        <img
          src={groundImg}
          className="w-full min-h-[120px] md:min-h-[180px] object-cover object-[left_bottom]"
        />
      </Parallax>

      <div className="container text-center bg-white z-10">
        <h1 className="text-2xl md:text-4xl font-black mb-8">Get In Touch</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, index) => (
            <ContactButton
              key={contact.name}
              contact={contact}
              delay={`${((index + 1) / 2) * 1000}ms`}
            />
          ))}
        </div>
        <div className="text-xs text-opacity-30 w-full mt-20">
          © 2024 Maytiya Monburinon
        </div>
      </div>
    </div>
  )
}
