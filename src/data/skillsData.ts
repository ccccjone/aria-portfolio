export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "🌐 Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "JavaScript", icon: "js" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vite", icon: "vite" },
      { name: "Figma", icon: "figma" }
    ]
  },
  {
    title: "🔧 Backend & Databases",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Firebase", icon: "firebase" }
    ]
  },
  {
    title: "🧱 Programming",
    skills: [
      { name: "Python", icon: "py" },
      { name: "C++", icon: "cpp" },
      { name: "C", icon: "c" },
      { name: "Java", icon: "java" },
      { name: "Haskell", icon: "haskell" },
      { name: "MATLAB", icon: "matlab" },
      { name: "R", icon: "r" }
    ]
  },
  {
    title: "⚙️ DevOps & Tools",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Linux", icon: "linux" },
      { name: "Nginx", icon: "nginx" },
      { name: "Postman", icon: "postman" },
      { name: "npm", icon: "npm" },
      { name: "Cypress", icon: "cypress" },
      { name: "Unity", icon: "unity" },
      { name: "Visual Studio Code", icon: "vscode"},
      { name: "Vercel", icon: "vercel"}
    ]
  }
];