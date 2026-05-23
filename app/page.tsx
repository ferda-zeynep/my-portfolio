import React from "react";

export default function Home() {
  const projects = [
    {
      title: "AI Resume Builder",
      description:
        "An AI-powered web application that enables users to create professional resumes in seconds. Built with Next.js, Tailwind CSS, and Gemini API.",
      tech: ["Next.js", "Tailwind CSS", "Prisma", "Gemini API"],
      liveLink: "https://ai-resume-builder-bay-mu.vercel.app/",
      githubLink: "https://github.com/ferda-zeynep/ai-resume-builder",
    },
    {
      title: "Team SaaS",
      description:
        "A modern management dashboard designed for teams to streamline workflows and project tracking with optimized data flow.",
      tech: ["React", "Tailwind CSS", "Context API", "Node.js"],
      liveLink: "https://team-management-app-eight.vercel.app/",
      githubLink: "https://github.com/ferda-zeynep/team-management-app",
    },
    {
      title: "Vertex Agency",
      description:
        "A pixel-perfect, highly responsive digital agency landing page implementation built strictly from a Figma design blueprint, focusing on advanced asset management, seamless fluid grids, and tactile micro-animations.",
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
