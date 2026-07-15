import React from "react";

export default function Home() {
  const projects = [
    {
      title: "CommercePilot AI",
      description:
        "An AI-powered presales platform that enables Solution Consultants to generate context-aware e-commerce demo environments with intelligent product discovery and Shopify Storefront integration.",
      tech: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "Shopify Storefront API",
        "Tailwind CSS",
        "Prisma",
      ],
      liveLink: "https://commerce-pilot-ai.vercel.app/",
      githubLink: "https://github.com/ferda-zeynep/commerce-pilot-ai",
    },
    {
      title: "Watchtower",
      description:
        "A full-stack observability platform featuring a custom telemetry SDK, real-time event streaming, and a live analytics dashboard for monitoring frontend application health.",
      tech: [
        "Next.js",
        "TypeScript",
        "Express",
        "Socket.io",
        "Prisma",
        "PostgreSQL",
        "Turborepo",
      ],
      liveLink: "https://watchtower-jt43.vercel.app/",
      githubLink: "https://github.com/ferda-zeynep/watchtower",
    },
    {
      title: "RoomMatch Prague",
      description:
        "A full-stack flatmate matching platform for Erasmus students and expats, featuring AI-assisted listing generation, advanced rental discovery and filtering, secure Clerk authentication, favorites management, and full CRUD operations powered by PostgreSQL.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Clerk",
        "Gemini API",
      ],
      liveLink: "https://roommatch-prague.vercel.app/",
      githubLink: "https://github.com/ferda-zeynep/roommatch-prague",
    },
    {
      title: "GenContent SaaS",
      description:
        "An AI-powered SaaS platform for generating social media content with secure authentication, AI-assisted copywriting, content history, and full CRUD management backed by PostgreSQL.",
      tech: ["Next.js", "Tailwind CSS", "Prisma", "Gemini API", "Clerk"],
      liveLink: "https://gencontent-sand.vercel.app",
      githubLink: "https://github.com/ferda-zeynep/gencontent",
    },
    {
      title: "AI Resume Builder",
      description:
        "An AI-powered resume builder that helps users create professional resumes with AI-generated content and a streamlined editing workflow.",
      tech: ["Next.js", "Tailwind CSS", "Prisma", "Gemini API"],
      liveLink: "https://ai-resume-builder-bay-mu.vercel.app/",
      githubLink: "https://github.com/ferda-zeynep/ai-resume-builder",
    },
    {
      title: "Team SaaS",
      description:
        "A collaborative team management dashboard featuring project tracking, task organization, and responsive data-driven interfaces.",
      tech: ["React", "Tailwind CSS", "Context API", "Node.js"],
      liveLink: "https://team-management-app-eight.vercel.app/",
      githubLink: "https://github.com/ferda-zeynep/team-management-app",
    },
    {
      title: "Vertex Agency",
      description:
        "A responsive agency landing page built from a Figma design, focusing on pixel-perfect implementation, reusable components, and modern frontend practices.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      liveLink: "https://nexcent-ten-lac.vercel.app",
      githubLink: "https://github.com/ferda-zeynep/vertex-agency",
    },
  ];
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 selection:bg-gray-200 selection:text-black">
      {/* HERO SECTION  */}
      <header className="mb-20">
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Ferda Zeynep Çapa
        </h1>
        <p className="mt-4 text-xl text-gray-600 font-medium">
          Junior Frontend Developer
        </p>
        <p className="mt-4 text-base text-gray-500 max-w-xl leading-relaxed">
          I build modern, fast, and user-centered web applications. I focus on
          UI/UX details and love turning Figma designs into pixel-perfect code.
        </p>

        {/* TECH STACK BADGES */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Figma",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* PROJECTS SECTION */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-black tracking-tight mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Featured Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50"
            >
              <h3 className="text-lg font-medium text-black group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Project Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-gray-400">
                {project.tech.map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-4 text-xs font-medium">
                <a
                  href={project.liveLink}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Live Demo 🌐
                </a>
                <a
                  href={project.githubLink}
                  className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  GitHub 💻
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT & SKILLS */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-12">
        <div>
          <h2 className="text-base font-semibold text-black mb-4">About Me</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            I specialize in turning complex problems into simple, beautiful
            interfaces. I'm passionate about web performance and creating
            accessible user interfaces.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-black mb-4">
            Skills & Tools
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            HTML5, CSS3, JavaScript (ES6+), React, Next.js, Tailwind CSS,
            Prisma, Git, and Figma.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400" suppressHydrationWarning>
          © {new Date().getFullYear()} Ferda Zeynep Çapa
        </p>
        <div className="flex gap-6 text-sm text-gray-500 font-medium">
          <a
            href="mailto:ferdacp@gmail.com"
            className="hover:text-black transition-colors underline underline-offset-4 decoration-gray-100"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ferda-zeynep-%C3%A7apa-643165256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors underline underline-offset-4 decoration-gray-100"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ferda-zeynep"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors underline underline-offset-4 decoration-gray-100"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
