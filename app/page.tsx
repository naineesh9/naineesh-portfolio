import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    range: "07/2025 — 05/2026",
    role: "Technical Assistant",
    org: "University of Memphis, Information Technology Services",
    location: "Memphis, TN",
    bullets: [
      "Installed, configured, and maintained Windows/macOS workstations and IT assets, providing technical support to 100+ students, faculty, and staff across hardware, software, and network issues.",
      "Monitored recurring support requests and system issues to identify patterns, documenting root causes and troubleshooting steps to reduce repeat incidents.",
      "Prepared and maintained technical documentation and status updates within the university’s ticketing system (TOPdesk), ensuring accurate tracking and clear user guidance.",
      "Coordinated with cross-functional IT teams and end users via RingCentral to triage, prioritize, and resolve issues, escalating complex cases appropriately.",
    ],
  },
  {
    range: "06/2022 — 06/2024",
    role: "Software Engineer",
    org: "DuPont",
    location: "Hyderabad, India",
    bullets: [
      "Built full-stack features with React.js, TypeScript, and Spring Boot, backed by RESTful APIs documented with Swagger/OpenAPI.",
      "Implemented event-driven messaging with Apache Kafka to decouple services and improve system reliability.",
      "Set up CI/CD pipelines with Jenkins and GitHub Actions to automate build, test, and deployment workflows.",
      "Integrated payment gateways with webhook-based reconciliation for transaction consistency.",
      "Secured endpoints with JWT-based authentication and role-based access control via Spring Security.",
      "Tuned MySQL and PostgreSQL queries and indexing strategy, improving response times by up to 30%.",
    ],
  },
];

const SKILLS = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "SQL", "C++", "Python"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Angular.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Spring Security", "REST APIs", "Node.js", "Express.js"],
  },
  {
    label: "Messaging & Data",
    items: ["Apache Kafka", "PostgreSQL", "MySQL", "Redis", "MongoDB", "WebSockets"],
  },
  {
    label: "DevOps",
    items: ["Jenkins", "Git", "GitHub Actions", "CI/CD", "Agile/Scrum", "Docker", "Kubernetes", "AWS"],
  },
  {
    label: "Auth & Security",
    items: ["JWT", "RBAC", "Spring Security"],
  },
  {
    label: "Generative AI & LLMs",
    items: ["OpenAI API", "Claude API", "LangChain", "LlamaIndex", "RAG", "Pinecone", "Prompt Engineering"],
  },
];

const PROJECTS = [
  {
    title: "Collaborative Project Kanban Board",
    description:
      "Real-time, multi-organization kanban board with live drag-and-drop updates, row-level-secured data isolation between organizations, and JWT-based auth. Includes optional OpenAI-assisted task suggestions.",
    stack: ["Next.js 14", "Node.js", "Socket.IO", "TypeScript", "PostgreSQL", "Prisma", "WebSockets", "JWT"],
    href: "https://github.com/naineesh9/collab-kanban",
  },
  {
    title: "Smart Meeting Summarizer & Action Item Tracker",
    description:
      "Retrieval-augmented pipeline that transcribes meeting audio and generates structured summaries and action items, combining a vector-indexed knowledge base with LLM-based extraction.",
    stack: ["Python", "FastAPI", "LangChain", "LlamaIndex", "Whisper API", "Pinecone", "PostgreSQL", "Docker", "Angular.js"],
    href: "https://github.com/naineesh9/smart-meeting-summarizer",
  },
  {
    title: "Wand Marketplace Platform",
    description:
      "Full-stack e-commerce marketplace built with a 4-person team, featuring product browsing/search/filtering, an admin dashboard for inventory and sales reporting, content moderation tools, and Devise-based authentication. Built as part of a database-backed web applications course.",
    stack: ["Ruby on Rails", "PostgreSQL", "Devise", "RSpec", "Bootstrap", "Active Storage"],
    href: "https://github.com/naineesh9/Chartreuse",
  },
];

const EDUCATION = [
  {
    school: "TheUniversity of Memphis",
    degree: "M.S. in Computer Science",
    detail: "GPA 3.83 / 4.00",
    range: "August 2024 — May 2026",
  },
  {
    school: "Vignan Institute of Technology and Science",
    degree: "B. Tech in Computer Science",
    detail: "Affiliated with JNTUH",
    range: "September 2020 — June 2024",
  },
];

function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="eyebrow mb-3">
      {index} / {label}
    </p>
  );
}

export default function Home() {
  return (
    <main className="font-body text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight">
            NAINEESH<span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-7 font-mono text-xs uppercase tracking-wide text-muted sm:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors hover:bg-ink hover:text-paper"
          >
            Contact
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 sm:pt-24">
        <p className="eyebrow mb-5">// SOFTWARE ENGINEER</p>
        <h1 className="reveal font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          Naineesh Reddy Bussannagari
        </h1>
        <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: "0.1s" }}>
          Full-stack engineer building React interfaces, Spring Boot services, and the
          event-driven systems that connect them.
        </p>

        {/* status bar */}
        <div
          className="reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-lg border border-line bg-panel px-5 py-4 font-mono text-xs text-muted"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="flex items-center gap-2">
            <span className="status-dot" />
            <span className="text-ink">OPEN TO WORK</span>
          </span>
          <span className="hidden text-line sm:inline">|</span>
          <span>2+ YRS EXPERIENCE</span>
          <span className="hidden text-line sm:inline">|</span>
          <span>MS COMPUTER SCIENCE</span>
          <span className="hidden text-line sm:inline">|</span>
          <div className="flex flex-col gap-4 font-mono text-sm text-muted">
              <div className="flex items-center gap-2">
                <MapPin size={15} strokeWidth={1.75} />
                <span>Memphis, TN</span>
              </div>
            </div>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.3s" }}>
          <a
            href="#projects"
            className="rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wide text-paper transition-opacity hover:opacity-85"
          >
            View Work
          </a>
          <a
            href="mailto:naineesh3@gmail.com"
            className="rounded-full border border-ink px-6 py-3 font-mono text-xs uppercase tracking-wide transition-colors hover:bg-ink hover:text-paper"
          >
            Get in Touch
          </a>
          <div className="ml-1 flex items-center gap-4 text-muted">
            <a href="https://github.com/naineesh9" aria-label="GitHub" className="transition-colors hover:text-ink">
              <Github size={19} strokeWidth={1.75} />
            </a>
            <a href="https://linkedin.com/in/naineesh" aria-label="LinkedIn" className="transition-colors hover:text-ink">
              <Linkedin size={19} strokeWidth={1.75} />
            </a>
            <a href="mailto:naineesh3@gmail.com" aria-label="Email" className="transition-colors hover:text-ink">
              <Mail size={19} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </section>

      {/* OPEN TO ROLES */}
<section className="border-t border-line bg-panel">
  <div className="mx-auto max-w-content px-6 py-16">
    <p className="eyebrow mb-3">OPEN TO ROLES</p>
    <p className="text-sm text-muted mb-8">Currently seeking full-time opportunities</p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { title: "Backend Developer", tag: "API + Systems" },
        { title: "Frontend Developer", tag: "UI + UX" },
        { title: "Full Stack Developer", tag: "End-to-End" },
        { title: "DevOps Engineer", tag: "Cloud + CI/CD" },
      ].map((role) => (
        <div key={role.title} className="rounded-xl border border-line bg-paper p-5">
          <h3 className="font-display text-base font-semibold">{role.title}</h3>
          <span className="mt-2 inline-block rounded-full bg-accentDim px-2.5 py-1 font-mono text-[11px] uppercase text-accent">
            {role.tag}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-content px-6 py-20">
          <SectionEyebrow index="01" label="About" />
          <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr]">
            {/* <div className="h-80 w-85 shrink-0 overflow-hidden rounded-2xl border border-line bg-paper sm:h-88 sm:w-88 lg:h-96 lg:w-96">
              <Image
                src="/profile.png"
                alt="Naineesh"
                width={352}
                height={352}
                className="h-full w-full object-cover"
              />
            </div> */}
            <p className="max-w-2xl text-lg leading-relaxed text-ink/85">
              I&apos;m a full-stack software engineer with 2+ years of experience shipping
              production systems — from React interfaces to Spring Boot services handling
              event-driven messaging at scale. At DuPont, I built and maintained RESTful APIs,
              integrated payment gateways with webhook reconciliation, and tuned PostgreSQL and
              MySQL queries for meaningfully faster response times. I hold an MS in Computer
              Science from the University of Memphis and a B.Technology in Computer Science from Vignan
              Institute of Technology and Science.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-content px-6 py-20">
        <SectionEyebrow index="02" label="Work Experience" />
        <div className="mt-4 flex flex-col divide-y divide-line border-t border-line">
          {EXPERIENCE.map((job) => (
            <div key={job.org} className="grid gap-3 py-8 sm:grid-cols-[220px_1fr]">
              <div className="font-mono text-xs uppercase tracking-wide text-muted">
                {job.range}
                <div className="mt-1 text-ink/60">{job.location}</div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                <p className="mt-0.5 text-accent">{job.org}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-content px-6 py-20">
          <SectionEyebrow index="03" label="Skills" />
          <div className="mt-4 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-xs uppercase tracking-wide text-muted">{group.label}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-content px-6 py-20">
        <SectionEyebrow index="04" label="Projects" />
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between rounded-xl border border-line bg-panel p-7 transition-shadow hover:shadow-[0_4px_24px_rgba(20,22,26,0.06)]"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {project.title}
                  </h3>
                  {project.href && (
                    <a
                      href={project.href}
                      aria-label={`${project.title} on GitHub`}
                      className="mt-1 shrink-0 text-muted transition-colors hover:text-accent"
                    >
                      <ArrowUpRight size={18} strokeWidth={1.75} />
                    </a>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{project.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accentDim px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-content px-6 py-20">
          <SectionEyebrow index="05" label="Education" />
          <div className="mt-4 flex flex-col divide-y divide-line border-t border-line">
            {EDUCATION.map((edu) => (
              <div key={edu.school} className="grid gap-1 py-6 sm:grid-cols-[220px_1fr] sm:items-baseline">
                <div className="font-mono text-xs uppercase tracking-wide text-muted">{edu.range}</div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{edu.school}</h3>
                  <p className="mt-0.5 text-sm text-ink/75">
                    {edu.degree} · {edu.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-content px-6 py-24">
        <SectionEyebrow index="06" label="Contact" />
        <div className="mt-4 flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-3 max-w-md text-ink/70">
              Open to full-time Software Engineer roles. The fastest way to reach me is email.
            </p>
          </div>
          <div className="flex flex-col gap-3 font-mono text-sm">
            <a href="mailto:naineesh3@gmail.com" className="flex items-center gap-2 hover:text-accent">
              <Mail size={16} strokeWidth={1.75} /> naineesh3@gmail.com
            </a>
            <a href="https://linkedin.com/in/naineesh" className="flex items-center gap-2 hover:text-accent">
              <Linkedin size={16} strokeWidth={1.75} /> linkedin.com/in/naineesh
            </a>
            <a href="https://github.com/naineesh9" className="flex items-center gap-2 hover:text-accent">
              <Github size={16} strokeWidth={1.75} /> github.com/naineesh9
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-8">
        <p className="mx-auto max-w-content font-mono text-xs text-muted">
          © 2026 Naineesh. Built with Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
