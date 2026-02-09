
import { Divide, FolderGit2, Globe, Server, Database, Code2 } from "lucide-react";

export const siteConfig = {
    name: "Your Portfolio",
    description: "A professional portfolio showcasing my work and skills.",
    links: {
        github: "https://github.com/Spearzz1",
        linkedin: "https://github.com/Spearzz1",
        email: "mailto:b.maaamoun456@gmail.com",
        resume: "/cv_pro.pdf"
    }
};

export const projects = [
    {
        id: "shopsphere",
        title: "ShopSphere",
        description: "Modern E-Commerce platform with full cart functionality, Stripe payment integration, and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
        demoUrl: "https://shopsphere-demo.vercel.app",
        githubUrl: "https://github.com/username/shopsphere",
        image: "/images/shopsphere.svg", // Placeholder
        category: "Full Stack"
    },
    {
        id: "taskflow",
        title: "TaskFlow Pro",
        description: "Trello-like task manager with real-time collaboration updates and team productivity features.",
        tech: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
        demoUrl: "https://taskflow-demo.vercel.app",
        githubUrl: "https://github.com/username/taskflow",
        image: "/images/taskflow.svg",
        category: "Web App"
    },
    {
        id: "petconnect",
        title: "PetConnect",
        description: "Adoption platform connecting shelters with potential pet parents, featuring real-time chat and maps.",
        tech: ["MERN Stack", "Socket.io", "Cloudinary", "Mapbox"],
        demoUrl: "https://petconnect-demo.vercel.app",
        githubUrl: "https://github.com/username/petconnect",
        image: "/images/petconnect.svg",
        category: "Full Stack"
    },
    {
        id: "financetracker",
        title: "FinanceTracker",
        description: "Personal finance tool with data visualization for expenses, budgeting, and financial goal tracking.",
        tech: ["Next.js", "Prisma", "PostgreSQL", "Chart.js"],
        demoUrl: "https://financetracker-demo.vercel.app",
        githubUrl: "https://github.com/username/financetracker",
        image: "/images/financetracker.svg",
        category: "Web App"
    }
];

export const skills = [
    { name: "React / Next.js", level: 95, icon: Code2 },
    { name: "TypeScript", level: 90, icon: Divide },
    { name: "Node.js", level: 85, icon: Server },
    { name: "Tailwind CSS", level: 98, icon: Globe },
    { name: "Database (SQL/NoSQL)", level: 80, icon: Database },
    { name: "Git & DevOps", level: 85, icon: FolderGit2 }
];

export const education = [
    {
        degree: "Genie Logiciel",
        school: "Faculty of Science Monastir",
        year: "2022 - 2025",
        description: "Software Engineering with a focus on web development and scalable systems."
    },
    {
        degree: "Full Stack Bootcamp",
        school: "Coding Academy",
        year: "2018",
        description: "Intensive 3-month program covering modern web technologies."
    }
];
