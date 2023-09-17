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
      startDate: "Sep 2023",
      endDate: "Present",
      description:
        "Developed and maintained web applications using modern technologies.",
      tags: ["Reactjs", "Nextjs"],
    },
    {
      title: "Front-end lead",
      company: "pengguin",
      link: "https://www.pengguin.com",
      location: "Delaware, United States (remote)",
      startDate: "Jun 2017",
      endDate: "Dec 2018",
      description:
        "Led product development initiatives, defined product roadmaps, and coordinated with engineering and design teams to launch successful products.",
        
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
      description:
        "Executed digital marketing campaigns, analyzed performance metrics, and optimized strategies to increase client ROI.",
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
      school: "MIT",
      link: "https://www.mit.edu",
      degree: "Engineer's degree",
      fieldOfStudy: "web development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
      startDate: "2015",
      endDate: "2020",
    },
    {
      school: "FreeCodeCamp",
      link: "https://www.freecodecamp.org",
      degree: "Certification",
      startDate: "2015",
    },
  ],
  projects: [
    {
      title: "Spotify Connected App",
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
    },
    {
      title: "Weather Forecast App",
      image: "/images/projects/project02.png",
      summary:
        "Create a weather forecast web application that allows users to check the weather for different locations. The project will involve using APIs, front-end technologies like React, and integrating with a weather data provider.",
      tags: ["React", "API Integration", "Weather"],
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
    },
    {
      title: "E-commerce Website",
      image: "/images/projects/project03.png",
      summary:
        "Develop a fully functional e-commerce website where users can browse products, add them to a cart, and make purchases. Technologies used will include React for the front end, Node.js for the back end, and MongoDB for the database.",
      tags: ["React", "Node.js", "E-commerce"],
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
    },
  ],
}
