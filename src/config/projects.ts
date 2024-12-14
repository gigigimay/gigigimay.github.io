import { ProjectInfo } from 'types'
import { techStacks } from './techstacks'

export const projects: ProjectInfo[] = [
  {
    title: 'APT. Tribute',
    description:
      'An experimental webapp in the theme of APT. song from Bruno Mars and Rosé ❤️. Plays with WebGL, Three.js, and mix-blend-mode CSS.',
    year: 2024,
    visitLink: 'https://3d-apateu.vercel.app/',
    repoLink: 'https://github.com/gigigimay/3d-apateu',
    isPublic: true,
    techStacks: [techStacks.threeJs, techStacks.react, techStacks.tailwindCSS],
  },
  {
    title: 'Bubeepbot',
    description:
      'A tiny discord bot that do varius fun stuffs in your channel like turning you and your friends into pokemons, or saying things you want with text-to-speech API.',
    year: 2022,
    repoLink: 'https://github.com/gigigimay/bubeepbot',
    isPublic: true,
    techStacks: [
      techStacks.nodeJs,
      techStacks.discordJs,
      techStacks.typescript,
      techStacks.heroku,
    ],
  },
  {
    title: 'Tarot',
    description:
      'An experimental webapp to learn MobX state managing and manual webpack configuration.',
    year: 2020,
    visitLink: 'https://tarot-six-nu.vercel.app/',
    repoLink: 'https://github.com/gigigimay/tarot',
    isPublic: true,
    techStacks: [
      techStacks.react,
      techStacks.mobX,
      techStacks.webpack,
      techStacks.babel,
    ],
  },
  {
    title: 'Paiwingkunhub',
    description:
      'A website to help you find the best virtual running events for you. With features to register for events, submit your progress, and get rewards.',
    year: 2021,
    visitLink: 'https://paiwingkunhub.com/',
    isPublic: false,
    techStacks: [
      techStacks.nextJs,
      techStacks.redux,
      techStacks.styledComponents,
      techStacks.javascript,
    ],
  },
  {
    title: 'Peerapat Residence',
    description:
      'A website for Peerapat Residence, a serviced apartment in Bangkok.',
    year: 2021,
    visitLink: 'https://peerapatresidence.com/',
    isPublic: false,
    techStacks: [techStacks.gatsby, techStacks.react, techStacks.javascript],
  },
  {
    title: 'Google SERP Scraper',
    description:
      'A full-stack webapp to scrape Google Search Engine Result Page (SERP) and store the data in PostgreSQL. With authentication feature and long-polling API for progress update.',
    year: 2024,
    visitLink: '',
    isPublic: false,
    techStacks: [
      techStacks.react,
      techStacks.redux,
      techStacks.tailwindCSS,
      techStacks.nodeJs,
      techStacks.express,
      techStacks.postgresql,
      techStacks.typeorm,
      techStacks.typescript,
      techStacks.turborepo,
    ],
  },
  {
    title: 'LINE Town Election',
    description:
      "A webapp that allow you to vote for your favorite LINE Town characters, with GraphQL and real-time update via websocket. Let's see who will be the next mayor!",
    // visitLink: 'https://line-assignment-2022-app.vercel.app/',
    year: 2022,
    isPublic: false,
    techStacks: [
      techStacks.react,
      techStacks.graphQL,
      techStacks.apolloGraphQL,
    ],
  },
  {
    title: 'ChordsHouse',
    description:
      'A python desktop application to store your guitar chords, with features to transpose the keys and auto scroll for convenience playing.',
    year: 2020,
    visitLink: 'https://youtu.be/R8kW0aoBXHA?si=PhINdkej25SNF7VV',
    repoLink: 'https://github.com/gigigimay/ChordsHouse',
    isPublic: true,
    techStacks: [techStacks.python, techStacks.pyQt, techStacks.mongoDB],
  },
  {
    title: 'Endustry',
    description:
      'A demo mobile Fultter application to give you latest news and services from Ministry of Industry. Part of the Ministry of Industry app contest 2020.',
    year: 2020,
    repoLink: 'https://github.com/gigigimay/endustry',
    isPublic: true,
    techStacks: [techStacks.flutter, techStacks.dart],
  },
  {
    title: 'SheepHi',
    description:
      "2D side-scroller game where you have to fly with balloons through all deathly thorns and arrows to follow the wolf king's order and catch sheeps for him #GlobalGameJam2018.",
    year: 2018,
    visitLink: 'https://v3.globalgamejam.org/2018/games/sheephi-0',
    isPublic: false,
    techStacks: [techStacks.unity, techStacks.cSharp],
  },
  // {
  //   title: 'The CORE',
  //   description:
  //     'A turn-based battle game made with Unity. Stories about a girl who sets out on a dangerous journey to find a cure for her sick mother.',
  //   year: 2018,
  //   isPublic: false,
  //   techStacks: [techStacks.unity, techStacks.cSharp],
  // },
  {
    title: 'Ecio',
    description:
      'A 2D platformer game made with Unity. Stories about a heartbroken man going on adventure and trying to change himself in order to reconcile with the girl he loves.',
    year: 2017,
    visitLink: 'https://store.steampowered.com/app/1094580/Ecio/',
    isPublic: false,
    techStacks: [techStacks.construct2],
  },
  {
    title: 'Krittika',
    description:
      'A 2D platformer game made with no-code engine "Construct 2", where you control 7 chicks to find their way to die and help them meet their mother again. #GlobalGameJam2017.',
    year: 2017,
    visitLink: 'https://v3.globalgamejam.org/2017/games/krittika',
    isPublic: false,
    techStacks: [techStacks.construct2],
  },
]
