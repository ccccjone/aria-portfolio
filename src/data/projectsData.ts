export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  status: 'completed' | 'in-development' | 'just-github';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "We Independent",
    description: "Built a full-featured nonprofit website from scratch with authentication, donation, and blog systems. Designed responsive UI and integrated PayPal SDK for seamless transactions.",
    image: "/aria-project-wi.png",
    technologies: ["React", "Node.js", "JavaScript", "PayPal SDK", "Postman", "JWT", "Figma"],
    githubLink: "https://github.com/we-independent",
    liveLink: "https://weindependent.org",
    status: "completed"
  },
    {
    id: 2,
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations and interactive components.",
    image: "/aria-project-portfolio.png",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "EmailJS", "AWS Amplify"],
    githubLink: "https://github.com/ccccjone/aria-portfolio",
    liveLink: "https://ariacui.me/",
    status: "completed"
  },
  {
    id: 3,
    title: "Bang!",
    description: "A native macOS app delivering daily LeetCode practice prompts. Features customizable notifications and progress tracking.",
    image: "/aria-project-bang.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Render", "Cypress", "Jest", "Third-Party API"],
    githubLink: "https://github.com/ccccjone/bang",
    status: "in-development"
  },
  {
    id: 4,
    title: "Pandas",
    description: "Contributed to Pandas core by fixing type compatibility issues and adding test coverage, with 2 PRs merged into the main branch.",
    image: "/aria-project-pandas.png",
    technologies: ["Python", "Pandas", "NumPy", "Git", "pytest", "CI/CD"],
    githubLink: "https://github.com/pandas-dev/pandas/pulls?q=is%3Apr+author%3Accccjone",
    status: "just-github"
  },
    {
    id: 5,
    title: "Penetration Testing",
    description: "Conducted a full-cycle penetration test on a simulated company system, with detailed reporting and remediation suggestions.",
    image: "/aria-project-pene.png",
    technologies: ["Nmap", "Kali Linux", "Wireshark", "Metasploit"],
    githubLink: "https://github.com/ccccjone/penetration-testing",
    status: "just-github"
  },
    {
    id: 6,
    title: "LeetNotify",
    description: "Get daily LeetCode challenges delivered natively on macOS with this lightweight, customizable app.",
    image: "/aria-project-leetnotify.png",
    technologies: ["Ruby", "MacOS", "Platypus", "AppleScript", "terminal-notifier"],
    githubLink: "https://github.com/ccccjone/leetnotify",
    status: "just-github"
  },
    {
    id: 7,
    title: "Blending Animation",
    description: "Explored Unity animation systems by building a motion blending demo with smooth state transitions and real-time input handling.",
    image: "/aria-project-blending.png",
    technologies: ["Unity", "C#", "Animator Controller"],
    githubLink: "https://github.com/ccccjone/Blending_Motion_in_Unity",
    status: "just-github"
  }
];