"use client";

import React from "react";

export default function Home() {
  const projects = [
    {
      title: "CommercePilot AI",
      description:
        "An AI-powered presales platform that enables Solution Consultants to instantly generate context-aware e-commerce demo environments with intelligent product discovery and Shopify Storefront integration.",
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
      image: "/commerce-pilot.png",
    },
    {
      title: "RoomMatch Prague",
      description:
        "A mobile-first flatmate matching platform for Erasmus students and expats, featuring advanced rental discovery and filtering, AI-assisted listing generation, secure Clerk authentication, favorites management, and full CRUD operations powered by PostgreSQL.",
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
      image: "/roommatch.png",
    },
    {
      title: "Watchtower",
      description:
        "A full-stack observability platform featuring a custom telemetry SDK, real-time event streaming, and a live analytics dashboard for monitoring frontend errors, performance, and application health.",
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
      image: "/watchtower.png",
    },
    {
      title: "GenContent SaaS",
      description:
        "An AI-powered SaaS platform for generating social media content with secure authentication, AI-assisted copywriting, content management, and full CRUD operations backed by PostgreSQL.",
      tech: ["Next.js", "Tailwind CSS", "Prisma", "Gemini API", "Clerk"],
      liveLink: "https://gencontent-sand.vercel.app",
      githubLink: "https://github.com/ferda-zeynep/gencontent",
      image: "/gencontent.png",
    },
    {
      title: "Team SaaS",
      description:
        "A collaborative team management dashboard featuring project tracking, task organization, responsive dashboards, and streamlined team workflows.",
      tech: ["React", "Tailwind CSS", "Context API", "Node.js"],
      liveLink: "https://team-management-app-eight.vercel.app/",
      githubLink: "https://github.com/ferda-zeynep/team-management-app",
      image: "/team-saas.png",
    },
    {
      title: "Vertex Agency",
      description:
        "A pixel-perfect agency landing page built from a Figma design, featuring reusable components, responsive layouts, and modern frontend best practices.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      liveLink: "https://nexcent-ten-lac.vercel.app",
      githubLink: "https://github.com/ferda-zeynep/vertex-agency",
      image: "/vertex-agency.png",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 selection:bg-gray-200 selection:text-black">
      {/* HERO SECTION */}
      <header className="mb-20">
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Ferda Zeynep Çapa
        </h1>
        <p className="mt-4 text-xl text-gray-600 font-medium">
          Software Engineer | Frontend & Full-Stack
        </p>
        <p className="mt-4 text-base text-gray-500 max-w-xl leading-relaxed">
          I build modern, fast, and user-centered web applications with a focus
          on clean UI, scalable full-stack architecture, and great user
          experiences. I enjoy turning ideas into production-ready products
          using modern web technologies.
        </p>

        {/* TECH STACK BADGES */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Tailwind",
            "Prisma",
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
              className="group relative p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 flex flex-col md:flex-row gap-6"
            >
              {/* Project Image */}
              <div className="w-full md:w-48 h-32 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.title === "RoomMatch Prague"
                      ? "object-contain bg-white p-1"
                      : "object-cover"
                  } group-hover:scale-105 transition-transform duration-300`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Project Details */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium text-black group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Section */}
                  <div className="mt-4">
                    <span className="text-xs font-semibold text-gray-800 block mb-1">
                      Tech Stack
                    </span>
                    <div className="text-[11px] text-gray-500 font-medium">
                      {project.tech.join(" • ")}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4 text-xs font-medium">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Live Demo 🌐
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    GitHub 💻
                  </a>
                </div>
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
            I build modern web applications with a strong focus on clean UI,
            performance, and maintainable architecture. I enjoy working across
            both frontend and backend, from designing responsive interfaces to
            building secure APIs and database-driven features. I'm also
            interested in observability, AI-assisted development workflows, and
            creating products that solve real user problems.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-black mb-4">
            Skills & Tools
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            TypeScript{"\n"}
            JavaScript (ES6+){"\n"}
            React{"\n"}
            Next.js{"\n"}
            Node.js{"\n"}
            PostgreSQL{"\n"}
            Prisma{"\n"}
            Tailwind CSS{"\n"}
            Git{"\n"}
            Clerk{"\n"}
            REST APIs{"\n"}
            OpenAI API{"\n"}
            Gemini API{"\n"}
            Figma
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
