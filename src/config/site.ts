import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Mehdi B.H.A.", // shown in the header
  description:
    "Mehdi BHA is a web developer elevating digital experiences with front-end expertise, making performant and elegant web solutions.",
  links: {
    // order is same order in the footer (when link added it's shown in the footer)
    mail: "mehdibenhadjali@gmail.com",
    linkedin: "https://linkedin.com/mehdibha",
    github: "https://github.com/mehdibha",
    twitter: "https://twitter.com/mehdibha_",
    instagram: "https://www.instagram.com/mehdibha",
    // codepen: "https://codepen.io/mehdi-ben-hadj-ali",
  },
  header: {
    // logo: "/images/logo.png",
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
    ],
  },
  heroBanner: {
    title: {
      1: [
        { text: "Hello. I'm " },
        { text: "Mehdi B.H.A", highlighted: true },
        { text: "." },
      ],
      2: [{ text: "A front-end developer." }],
    },
    subtitle:
      "Elevating Digital Experiences with Front-End Expertise: Your Front-End Developer for performant and elegant Web Solutions.",
    callToActions: [
      {
        label: "Read the blog",
        href: "/blog",
      },
      {
        label: "Explore my projects",
        href: "#projects",
      },
    ],
  },
  about: {
    avatar: "/images/avatar.png",
    title: "I'm a passionate web developer working from Sousse,Tunisia.",
    description: [
      "Hello! I'm Mehdi, a seasoned web developer with a strong passion for front-end development. My coding journey began in 2012 when I created a bot for the game Dofus and crafted websites as a young enthusiast.",
      "In 2019, I co-founded Code Hub, a developer-focused coworking space, and ventured into freelancing on various projects. I later joined Pengguin, a startup dedicated to simplifying language learning, where I've been applying my expertise to make the web more accessible.",
      "Outside of my professional work, I'm a dedicated open-source contributor, spending my nights coding for the community. Now a full-time freelancer, I'm committed to delivering top-notch front-end solutions.",
      "Let's connect and explore the endless possibilities of front-end web development together. Feel free to reach out for collaborations or to discuss the latest in the tech world.",
    ],
  },
  experience: [
    {
      title: "Freelancer",
      company: "Upwork",
      link: "https://www.upwork.com/freelancers/~01bf255619b222c4d2",
      location: "Remote",
      startDate: "Sept 2023",
      endDate: "Present",
      description: ["Working"],
      tags: ["Reactjs", "Nextjs"],
    },
    {
      title: "Front-end lead",
      company: "pengguin",
      link: "https://www.pengguin.com",
      location: "Delaware, United States (remote)",
      startDate: "Jun 2017",
      endDate: "Dec 2018",
      description: [
        "Led product development initiatives, defined product roadmaps, and coordinated with engineering and design teams to launch successful products.",
        "Led the development of a web-based language learning platform similar to Google Meet, managing a team of 3 developers.",
        "Developed the platform from scratch using React, Next.js, and Redux, and integrated key features such as whiteboard and video call capabilities.",
        "Implemented a script to generate code based on the OpenAPI specification file to generate services and hooks ready to use in the react project to speed up developement.",
        "Implemented a design system using Storybook to ensure consistent and high-quality UI across the platform.",
        "Created a Zoom plugin that utilized AI to analyze grammar errors during meetings, providing feedback to users and helping to improve language skills.",
        "Demonstrated strong leadership skills, guiding the team through the development process and ensuring project deadlines were met",
        "Strengthened my expertise in front-end development and project management while contributing to the development of an innovative language learning platform",
      ],

      tags: [
        "Product Development",
        "Product Roadmaps",
        "Engineering",
        "Design",
        "Coordination",
        "Launch",
        "Product Management",
      ],
    },
    {
      title: "Full-stack developer",
      company: "Code Hub",
      link: "https://www.codehub.tn",
      location: "United States",
      startDate: "Mar 2015",
      endDate: "May 2017",
      description: [
        "Founded and managed Code Hub, a coworking space for developers in Sousse. As a freelance React developer, worked with various clients on diverse projects. Implemented custom React solutions for clients, delivering high-quality and performant code.",
        "Collaborated with clients to define project requirements and ensure their needs were met.",
        "Led initiatives to foster a strong community of developers at Code Hub, organizing events and workshops to share knowledge and build relationships.",
        "Managed the day-to-day operations of the coworking space, overseeing facilities management, customer service, and marketing efforts.",
        "Demonstrated strong entrepreneurial and managerial skills, establishing Code Hub as a go-to destination for developers in Sousse and building a loyal customer base.",
        "Strengthened my expertise in React development and business management while leading Code Hub to success as a thriving coworking space.",
      ],
      tags: [
        "Digital Marketing",
        "Campaigns",
        "Performance Metrics",
        "Strategy Optimization",
        "ROI Analysis",
      ],
    },
  ],
  education: [
    {
      school: "Esprit",
      link: "https://www.esprit.tn",
      degree: "Engineer's degree",
      fieldOfStudy: "web development",
      startDate: "2015",
      endDate: "2020",
    },
  ],
  projects: [
    {
      title: "Notionfol.io",
      image: "/images/projects/project01.webp",
      summary:
        "Build a Spotify Connected App Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      tags: ["React"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
        "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
        "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
      ],
      links: {
        website: "https://www.codehub.tn",
        github: "https://www.github.com/Mehdi-BHA/notionfolio",
        npm: "https://www.npmjs.com/package/react-wave-player",
      },
      featured: true,
    },
  ],
  contact: {
    title: "Get in touch",
    description:
      "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    callToAction: {
      label: "Say hello",
      href: "emailto:mehdibenhadjali@gmail.com",
    },
  },
}
