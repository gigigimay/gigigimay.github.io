import appmanLogo from 'assets/images/appman-logo.jpg'
import tniLogo from 'assets/images/tni-logo.jpg'
import { ExperienceInfo } from 'types'

export const experiences: ExperienceInfo[] = [
  {
    title: 'Senior Full-Stack Software Engineer',
    company: 'AppMan',
    logo: appmanLogo,
    date: 'Jan 2021 - Jul 2024',
    description: `
- Developed and maintained core multi-tenant SaaS products, including E-KYC Platform,
Background Check Platform, Document OCR Pipelines with AI Chatbot, Transaction & Credits System, Video Conferencing App.
- Successfully migrated production data for 200+ client companies, encompassing thousands of cases, from old to new systems.
- Played a key role in Agile processes, including product design, technical solution design, resource planning, and sprint planning.
- Supervised ~10 junior and intern developers through code reviews, guidance, and mentorship.
- Improved code review processes and promoted high-quality code, leading to a cleaner, more consistent codebase across the team.
`,
  },
  {
    title: 'Frontend Software Engineer',
    company: 'AppMan',
    logo: appmanLogo,
    date: 'Mar 2020 - Dec 2020',
    description: `
- Developed and maintained software to optimize the insurance business process, including suitability questions, e-quotations, and e-applications, using React Native.
- Designed and implemented E2E automation tests for mobile applications using Appium.
`,
  },
  {
    title: 'Frontend Engineer (Internship)',
    company: 'AppMan',
    logo: appmanLogo,
    date: 'Jun 2019 - Oct 2019',
    description: `
- Created a reusable and customizable UI library in React and React Native to standardize the company’s design system.
- Developed an employee check-in application using React, streamlining the internal attendance process.
`,
  },
]

export const educations: ExperienceInfo[] = [
  {
    title: 'B.S. in Multimedia Technology',
    company: 'Thai-Nichi Institute of Technology',
    logo: tniLogo,
    logoClass: 'w-8 h-8',
    date: '2016 - 2020',
    description: `
- First Class Honors, Gold Medal, 3.97 GPA
- Full scholarship with a monthly allowance
- Achieved a Certificate of Academic Excellence in every academic year.
- Volunteered as a staff member for the Techsauce Global Summit event.
`,
  },
]
