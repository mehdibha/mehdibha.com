import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Mehdi B.H.A.", // shown in the header
  description:
    "Mehdi BHA is a web developer elevating digital experiences with front-end expertise, making performant and elegant web solutions.",
  links: {
    // order is same order in the footer (when link added it's shown in the footer)
    mail: "hello@mehdi.co",
    linkedin: "https://linkedin.com/mehdibha",
    github: "https://github.com/mehdibha",
    twitter: "https://twitter.com/mehdibha_",
    instagram: "https://www.instagram.com/mehdibha",
    // codepen: "https://codepen.io/mehdi-ben-hadj-ali",
  },
  header: {
    logo: "/images/logo.png",
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Courses",
        href: "/courses",
      },
      {
        title: "Tools",
        href: "/tools",
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
    subtitle: "Elevating digital experiences with react expertise.",
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
      description: [
        "As a Freelancer on Upwork, I've been actively working on projects involving React.js and Next.js. My current role involves working remotely, and I have been contributing to various projects, enhancing my skills and delivering top-notch results",
      ],
      tags: ["Reactjs", "Nextjs"],
    },
    {
      title: "Front-end lead",
      company: "pengguin",
      link: "https://www.pengguin.com",
      location: "Delaware, United States (remote)",
      startDate: "Mar 2022",
      endDate: "Aug 2023",
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
      title: "Founder & full-stack developer",
      company: "Code Hub",
      link: "https://www.codehub.tn",
      location: "Sousse, Tunisia",
      startDate: "Jan 2021",
      endDate: "Feb 2022",
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
      image: "/images/projects/notionfolio.png",
      summary:
        "Notionfol.io is a versatile platform that empowers users to create their personalized portfolios and blogs seamlessly using Next.js and Vercel. It leverages the power of Notion as a content management system, offering features such as SEO-friendly URLs, responsive design, and incremental static regeneration.",
      tags: ["React"],
      description: [
        "This repo is what I use to power my personal blog and portfolio website.",
        "It's perfect for building your own personal website if you are a developer, a designer, a researcher, a writer with almost everything customizable.",
        "Features include writing posts using Notion as CMS, pretty URLs, SEO-friendly, entirely customizable through one config file, fast page views, sleek portfolio showcase, dark and light mode, responsive design, incremental static regeneration, RSS feed, deploy on Vercel in minutes, search posts instantly, analytics with Vercel Analytics, and the ability to display your courses.",
      ],
      links: {
        website: "https://www.notionfol.io",
        github: "https://www.github.com/mehdibha/notionfolio",
        // npm: "https://www.npmjs.com/package/react-wave-player",
      },
      featured: true,
    },
  ],
  contact: {
    title: "Get in touch",
    description:
      "Ready to elevate your React projects? Let's collaborate! Drop me a line, and let's discuss turning your ideas into stunning web experiences.",
    callToAction: {
      label: "Say hello",
      href: "emailto:hello@mehdibha.co",
    },
  },
  courses: [
    {
      title: "React.dev",
      description:
        "Learn React with the offical react docs. They remade their website in march.",
      image: "/images/courses/react.png",
      price: "FREE",
      tags: ["docs"],
      link: "https://react.dev/learn",
    },
    {
      title: "React handbook",
      description:
        "Modern approaches to architecture and feature development in React apps.",
      image: "/images/courses/react.png",
      price: "FREE",
      tags: ["Advanced"],
      link: "https://reacthandbook.dev/",
    },
    {
      title: "Epic React",
      description:
        "Confidently Ship Well-Architected Production Ready React Apps Like a Pro",
      image: "/images/courses/epic-react.png",
      price: "$179",
      tags: ["Intermediate", "Advanced", "5 chapters"],
      link: "https://epicreact.dev/",
    },
  ],
  tools: [
    {
      title: "Color hunt",
      description:
        "Discover the newest hand-picked color palettes of Color Hunt. Get color inspiration for your design and art projects.",
      image: "/images/tools/color-hunt.png",
      tags: ["Color palette", "Design"],
      link: "https://colorhunt.co/",
    },
  ],
}
