/**
 * Global variables containing list of JSON objects used to populate html with content.
 * Note: The photoPath field is the path to the media relative to the scripts folder.
 */

const work = [
  {
    name: "Ownit",
    position: "Software Engineer Intern",
    photoPath: "../assets/media/ownit.jpg",
    techStack: ["Vue.js", "React.js", "AWS", "Docker", ".Net Core"],
    startDate: "May 2022",
    endDate: "Dec 2022",
    details: [
      "At Ownit, I led a solo project collaborating with stakeholders to create a serverless media management tool. This tool optimized images and videos for high-performance product pages, benefiting the product merchandising team. While challenging due to my lack of prior AWS experience, I successfully built the AWS backend (Lambda, S3, API Gateway) using Serverless Application Model. A frontend built with React.js for the tool was integrated into Ownit's internal portal. I also maintained documentation throughout the process of building the project which includes design decisions, user flow diagram, etc.",
      "The latter half of the internship I collaborated with ex-Amazon engineers to build and deploy an AWS-based merchandising portal, gaining insight into software engineering in a startup environment and emphasizing the value of documentation.",
    ],
    links: [
      {
        title: "Landing Page",
        href: "https://www.ownit.co/",
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/ownitco/",
      },
    ],
  },
  {
    name: "PCL Constructions",
    position: "Student Software Developer",
    photoPath: "../assets/media/pcl.jpg",
    techStack: [
      "Angular.js",
      "ASP.NET Core",
      "Microsoft Azure",
      ".Net Core",
      "Docker",
      "gRPC",
    ],
    startDate: "May 2023",
    endDate: "Aug 2023",
    details: [
      "At PCL Constructions, I contributed to various apps within the Job Site Suite, their job site management solution. I handled tasks across different apps, leveraging full-stack skills and adapting to Angular.js. I spent most of my time towards backend development, an area I lacked expertise in. I worked on both monolithic and microservice architectures, gaining insights into their distinctions. Notably, I independently built a reporting microservice using gRPC, from designing the data model to completion.",
      "Aside from coding, I wrote a comprehensive developer onboarding guide encompassing development processes, terminology, and local setup, primarily for my reference. This experience also highlighted the operational disparities between large companies and startups.",
    ],
    links: [
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/pcl-construction",
      },
    ],
  },
  {
    name: "Minoa",
    position: "Part Time Software Engineer",
    photoPath: "../assets/media/pcl.jpg",
    techStack: [
      "React",
      "Firebase",
      "Google Cloud Platform",
    ],
    startDate: "Sept 2023",
    endDate: "Present",
    details: [
      "In Progress...",
    ],
    links: [
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/getminoa/",
      },
    ],
  },
];

const projects = [
  {
    name: "Music Together",
    position: "Personal",
    photoPath: "../assets/media/musictogether.jpg",
    techStack: ["React.js", "Firebase", "Youtube Data API"],
    startDate: "June 2021",
    endDate: "Aug 2021",
    details: [
      "Music Together is a simple music player enabling synchronized listening among users. Developed using React.js for the frontend, Firebase for synchronous playback, and Youtube's Data API for music retrieval. Since this was the first web project I've ever completed, there's a lot of room for enhancements, such as refining the room system and addressing basic accessibility aspects like keyboard navigation and mobile responsiveness.",
    ],
    links: [
      {
        title: "Live Site",
        href: "https://maxxontan.github.io/music-together/",
      },
      {
        title: "Github",
        href: "https://github.com/MaxxonTan/music-together",
      },
    ],
  },
  {
    name: "Inedible In & Out",
    position: "Team",
    photoPath: "../assets/media/inandout.jpg",
    techStack: ["JavaScript", "HTML & CSS", "Chrome Extension API"],
    startDate: "Jan 2022",
    endDate: "Dec 2022",
    details: [
      "In & Out is a Chrome extension developer tool designed to assist web developers in assessing website responsiveness. It generates screenshots at 6 distinct zoom levels, aiding in quick evaluations. Initially conceived for a hackathon project, the tool was built using Chrome's Extension API. While I thought the concept held promise, time limitations and my web development skills at the time led to a not so practicle result.",
    ],
    links: [
      {
        title: "Github",
        href: "https://github.com/MaxxonTan/InAndOut",
      },
    ],
  },
  {
    name: "QR Hunter",
    position: "Team",
    photoPath: "../assets/media/qrhunter.jpg",
    techStack: ["Java", "Firebase", "Android Studio"],
    startDate: "Jan 2023",
    endDate: "Apr 2023",
    details: [
      "QR Hunter is an Android game Pokemon-Go for CMPUT301. This is a project-based course requiring teams to build an application according to the professor's requirement from scratch, including user interface and data model design. I was responsible for the majority of the user interface design (done with Figma), designing the app architecture and documentation (as shown in the README). It was interesting to see how design patterns that have been talked about in textbook work in action and how they affect developer productivity.",
    ],
    links: [
      {
        title: "Github",
        href: "https://github.com/CMPUT301W23T14/QRHunter-App",
      },
      {
        title: "README",
        href: "https://github.com/CMPUT301W23T14/QRHunter-App/blob/main/README.md",
      },
    ],
  },
  {
    name: "Popin",
    position: "Team",
    photoPath: "../assets/media/popin.jpg",
    techStack: ["Next.js", "Firebase", "Capacitor.js"],
    startDate: "Jan 2022",
    endDate: "Dec 2022",
    details: [
      "Popin is a student event app available Web, Android and IOS with over 300 accounts created and 250+ downloads across IOS and Android. Firebase was used for authentication and database, and Google Cloud Platform was used for scheduling notifications.",
    ],
    links: [
      {
        title: "Live Site",
        href: "https://www.popin.ca/",
      },
      {
        title: "Landing Page",
        href: "https://www.about.popin.ca/",
      },
    ],
  },
  {
    index: 4,
    name: "Shortcard",
    position: "Personal",
    photoPath: "../assets/media/shortcard.jpg",
    techStack: ["Next.js 13", "Supabase", "Fabric.js"],
    startDate: "Feb 2023",
    endDate: "July 2023",
    details: [
      "Shortcard is a web app built with Next.js 13 (App Router). This was my first time using React Server Components, so it took a while to get used to. I also used Fabric.js, a canvas library, for editing and rendering the canvas which I had a lot of trouble with. Especially when it comes to rendering the canvas and how it interacted with React's component lifecycle. For the backend, I originally planned to have a container hosted somewhere but I found Supabase's client to be sufficient enough. Something that was of priority for this project is also to make sure that users can view cards on both their phone and desktop, which was quite challenging since the cards's dimensions are fixed.",
      "One mistake that I did when building this project was that I spent the majority of my time deciding rather than doing, whether its choosing the fonts, what tech stack, etc.",
    ],
    links: [
      {
        title: "Live Site",
        href: "https://shortcard.vercel.app/",
      },
      {
        title: "Github",
        href: "https://github.com/MaxxonTan/Shortcard",
      },
    ],
  },
];
