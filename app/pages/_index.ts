import { html } from "lit";
import type { LitoPageModule } from "@litoho/app";

const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
      { name: "SQL", mark: "SQL" }
    ]
  },
  {
    title: "Frontend Frameworks",
    items: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "Nuxt.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" },
      { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" }
    ]
  },
  {
    title: "Frontend & UI",
    items: [
      { name: "Litoho", mark: "Li" },
      { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" },
      { name: "Lit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lit/lit-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Web Components", mark: "WC" },
      { name: "Radix UI", mark: "Rx" }
    ]
  },
  {
    title: "Backend Frameworks",
    items: [
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "Fiber", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Hono", mark: "火" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" }
    ]
  },
  {
    title: "Database & ORMs",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
      { name: "MongoDB Atlas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "SQLAlchemy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" }
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "Oracle Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
      { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" }
    ]
  }
] as const;

const experienceHighlights = [
  "Developed and optimized robust APIs to manage and synchronize product data across major e-commerce platforms, including Shopee, Lazada, and TikTok Shop.",
  "Engineered real-time frontend interfaces to communicate seamlessly with backend AI models using Server-Sent Events (SSE) and WebSockets.",
  "Collaborated closely with AI Engineers and cross-functional teams to deliver internal sub-projects efficiently."
] as const;

const litohoHighlights = [
  "Built a personal full-stack framework around Lit and Native Web Components.",
  "Implemented SSR, file-based routing, API routes, generated manifests, CLI generators, and production security helpers.",
  "Published version 0.1.4 to npm with package release checks and smoke tests.",
  "Built the public framework website and documentation at litoho.dev."
] as const;

const aiChatbotFeatures = [
  "Designed and implemented a responsive AI chat UI with Next.js and modern frontend patterns.",
  "Connected the interface to LLM APIs such as OpenAI and Gemini API for conversational AI workflows.",
  "Focused on streaming-friendly UX, prompt input states, message rendering, loading feedback, and API integration boundaries."
] as const;

const smartPosFeatures = [
  "Cloud-based Point of Sale SaaS platform designed for modern multi-branch businesses.",
  "Planned around multi-tenancy, inventory management, real-time dashboards, and role-based access control.",
  "Recommended stack: Next.js, Tailwind CSS, NestJS, PostgreSQL, DigitalOcean, and Docker."
] as const;

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/phatysddev",
    href: "https://github.com/phatysddev"
  },
  {
    label: "Phone",
    value: "+66 0638813291",
    href: "tel:+660638813291"
  },
  {
    label: "Email",
    value: "phatysd.dev@gmail.com",
    href: "mailto:phatysd.dev@gmail.com"
  },
  {
    label: "Location",
    value: "Ubon Ratchathani / Khon Kaen",
    href: "#contact"
  }
] as const;

const page: LitoPageModule = {
  document: {
    title: "Yodsavee Supachoktanasap, Full Stack Developer",
    meta: [
      {
        name: "description",
        content:
          "Portfolio of Yodsavee Supachoktanasap, Full Stack Developer and Data Science and Software Innovation student with hands-on professional experience in API integrations and real-time frontend systems."
      }
    ]
  },
  render: () => html`
    <main>
      <section class="relative isolate min-h-[calc(100svh-6.75rem)] overflow-hidden border-b border-white/10 lg:min-h-[calc(100svh-4rem)]">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_76%_12%,rgba(248,113,113,0.16),transparent_24%),linear-gradient(135deg,#05070d_0%,#08111f_48%,#03040a_100%)]"></div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#05070d] to-transparent"></div>

        <div class="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.78fr)] lg:items-end lg:px-8 lg:py-24">
          <div>
            <p class="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-cyan-200">
              <span class="h-px w-10 bg-cyan-200"></span>
              Full stack developer
            </p>
            <h1 class="mt-6 max-w-5xl text-5xl font-black tracking-[-0.075em] text-white sm:text-7xl lg:text-8xl">
              Yodsavee
              <span class="block text-cyan-200">Supachoktanasap</span>
            </h1>
            <p class="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Motivated 2nd-year Data Science and Software Innovation student with hands-on professional experience in
              Full Stack Development, complex API integrations, and real-time frontend interfaces for AI systems.
            </p>
            <div class="mt-9 flex flex-wrap gap-3">
              <a class="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5" href="#work">
                View Projects
              </a>
              <a class="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/70" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
            <div class="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl"></div>
            <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Profile snapshot</p>
            <div class="mt-5 grid gap-5">
              <div>
                <p class="text-3xl font-black tracking-[-0.05em] text-white">Full Stack Developer</p>
                <p class="mt-2 text-sm leading-7 text-slate-300">Professional experience from March 2025 to September 2025.</p>
              </div>
              <div class="grid grid-cols-2 gap-3 text-sm">
                <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p class="text-slate-500">Experience</p>
                  <p class="mt-2 font-semibold text-white">6 Months</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p class="text-slate-500">Study</p>
                  <p class="mt-2 font-semibold text-white">2nd Year</p>
                </div>
              </div>
              <a class="text-sm font-semibold text-cyan-100 transition hover:text-white" href="https://github.com/phatysddev">
                github.com/phatysddev
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" class="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-24">
        <div>
          <p class="text-xs uppercase tracking-[0.32em] text-cyan-200">About me</p>
          <h2 class="mt-4 text-3xl font-black tracking-[-0.055em] text-white sm:text-5xl">
            Fast learner, adaptable builder, and practical full-stack problem solver.
          </h2>
        </div>
        <div class="space-y-6 text-base leading-8 text-slate-300">
          <p>
            Proven ability to build complex API integrations for e-commerce and real-time frontend interfaces for AI
            systems. Highly adaptable and eager to use a strong foundation in modern web technologies to deliver
            impactful software solutions.
          </p>
          <p>
            Currently studying Bachelor of Science in Data Science and Software Innovation at Ubon Ratchathani
            University. Native Thai speaker with basic/conversational English.
          </p>
          <p>
            ผมยังสนใจการสร้างเครื่องมือที่ช่วยให้การเขียนเว็บมีประสิทธิภาพขึ้น การทำ SSR, Web Components,
            Machine Learning และเป็นแฟนตัวยงของดนตรี Punk Rock ยุค 90s ครับ
          </p>
        </div>
      </section>

      <section id="skills" class="border-y border-white/10 bg-white/[0.025]">
        <div class="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div class="max-w-3xl">
            <p class="text-xs uppercase tracking-[0.32em] text-cyan-200">Technical skills</p>
            <h2 class="mt-4 text-3xl font-black tracking-[-0.055em] text-white sm:text-5xl">From APIs and real-time UI to cloud deployment.</h2>
          </div>
          <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            ${skillGroups.map(
              (group) => html`
                <article class="rounded-[1.65rem] border border-white/10 bg-[#070b14]/80 p-5">
                  <h3 class="text-lg font-bold text-white">${group.title}</h3>
                  <div class="mt-5 grid grid-cols-2 gap-3">
                    ${group.items.map(
                      (skill) => html`
                        <div class="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/[0.07]">
                          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white text-sm font-black text-slate-950 shadow-lg shadow-black/20">
                            ${"icon" in skill
                              ? html`<img class="h-6 w-6 object-contain" src=${skill.icon} alt=${`${skill.name} logo`} loading="lazy" />`
                              : html`<span>${skill.mark}</span>`}
                          </span>
                          <span class="min-w-0 text-sm font-semibold leading-5 text-slate-200">${skill.name}</span>
                        </div>
                      `
                    )}
                  </div>
                </article>
              `
            )}
          </div>
        </div>
      </section>

      <section id="work" class="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="text-xs uppercase tracking-[0.32em] text-cyan-200">Featured work</p>
            <h2 class="mt-4 text-3xl font-black tracking-[-0.055em] text-white sm:text-5xl">Professional experience and key projects.</h2>
          </div>
          <p class="max-w-xl text-sm leading-7 text-slate-400">
            Hands-on work across API synchronization, real-time interfaces, POS architecture, documentation, Docker,
            and Nginx deployment.
          </p>
        </div>

        <article class="mt-12 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.055]">
          <div class="grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div class="p-6 sm:p-8">
              <p class="text-xs uppercase tracking-[0.32em] text-cyan-100">Professional experience</p>
              <h3 class="mt-5 text-4xl font-black tracking-[-0.07em] text-white sm:text-6xl">Full Stack Developer</h3>
              <p class="mt-4 text-lg italic text-cyan-100">Confidential Company | March 2025 - September 2025 (6 Months)</p>
              <p class="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Built and optimized production-facing systems across e-commerce product synchronization, AI-powered
                frontend communication, and internal tools with cross-functional teams.
              </p>
              <div class="mt-7 flex flex-wrap gap-2">
                <span class="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-950">API Integrations</span>
                <span class="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-cyan-100">SSE + WebSockets</span>
                <span class="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-cyan-100">AI Systems</span>
              </div>
            </div>
            <div class="border-t border-white/10 bg-black/20 p-6 sm:p-8 lg:border-l lg:border-t-0">
              <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Responsibilities</p>
              <div class="mt-5 grid gap-3">
                ${experienceHighlights.map(
                  (item) => html`
                    <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300">
                      ${item}
                    </div>
                  `
                )}
              </div>
            </div>
          </div>
        </article>

        <article id="litoho" class="mt-8 grid gap-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.055] p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p class="text-xs uppercase tracking-[0.32em] text-cyan-100">Key project</p>
            <h3 class="mt-4 text-3xl font-black tracking-[-0.055em] text-white sm:text-4xl">Litoho Framework Website</h3>
            <p class="mt-3 text-base italic text-cyan-100">litoho.dev | Framework, Documentation, and Public Launch Site</p>
            <p class="mt-6 text-sm leading-7 text-slate-400">
              Built the public website and documentation experience for Litoho, a personal full-stack framework focused
              on Lit, SSR, Native Web Components, CLI workflows, and production-ready server guardrails.
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              ${["Litoho 0.1.4", "Lit", "SSR", "Tailwind CSS", "SEO", "Documentation"].map(
                (item) => html`<span class="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">${item}</span>`
              )}
            </div>
            <div class="mt-7 flex flex-wrap gap-3">
              <a class="inline-flex min-h-11 items-center rounded-full bg-cyan-100 px-5 text-sm font-bold text-slate-950" href="https://litoho.dev">
                Visit litoho.dev
              </a>
              <a class="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 text-sm font-bold text-white" href="https://github.com/phatysddev/lito">
                GitHub
              </a>
            </div>
          </div>
          <div class="grid gap-3">
            ${litohoHighlights.map(
              (item) => html`
                <div class="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p class="text-sm leading-7 text-slate-300">${item}</p>
                </div>
              `
            )}
          </div>
        </article>

        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <article class="rounded-[2rem] border border-rose-200/20 bg-rose-200/[0.045] p-6 sm:p-8">
            <p class="text-xs uppercase tracking-[0.32em] text-rose-200">AI project</p>
            <h3 class="mt-4 text-3xl font-black tracking-[-0.055em] text-white sm:text-4xl">AI Chatbot Interface</h3>
            <p class="mt-3 text-base italic text-rose-100">Next.js UI connected to LLM APIs such as OpenAI and Gemini API</p>
            <p class="mt-6 text-sm leading-7 text-slate-300">
              Built a modern chatbot frontend focused on clean conversation flow, responsive chat layout, API request
              states, and integration boundaries for large language model providers.
            </p>
            <div class="mt-6 grid gap-3">
              ${aiChatbotFeatures.map(
                (item) => html`
                  <div class="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300">${item}</div>
                `
              )}
            </div>
            <div class="mt-7 flex flex-wrap gap-2">
              ${["Next.js", "Tailwind CSS", "OpenAI API", "Gemini API", "LLM Integration", "Chat UX"].map(
                (item) => html`<span class="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">${item}</span>`
              )}
            </div>
          </article>

          <article class="rounded-[2rem] border border-amber-200/20 bg-amber-200/[0.045] p-6 sm:p-8">
            <p class="text-xs uppercase tracking-[0.32em] text-amber-200">SaaS project</p>
            <h3 class="mt-4 text-3xl font-black tracking-[-0.055em] text-white sm:text-4xl">SaaS Smart POS</h3>
            <p class="mt-3 text-base italic text-amber-100">A Cloud-Based Point of Sale Solution for Modern Businesses</p>
            <p class="mt-6 text-sm leading-7 text-slate-300">
              ระบบจัดการการขายหน้าร้านรูปแบบ SaaS ที่ออกแบบมาเพื่อรองรับธุรกิจหลายสาขา เน้นความรวดเร็วในการใช้งาน
              ความแม่นยำของข้อมูลสต็อก และการเข้าถึงข้อมูลแบบ Real-time ผ่าน Cloud Infrastructure.
            </p>
            <div class="mt-6 grid gap-3">
              ${smartPosFeatures.map(
                (item) => html`
                  <div class="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300">${item}</div>
                `
              )}
            </div>
            <div class="mt-7 flex flex-wrap gap-2">
              ${["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "DigitalOcean", "Docker", "RBAC"].map(
                (item) => html`<span class="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">${item}</span>`
              )}
            </div>
          </article>

          <article class="rounded-[2rem] border border-white/10 bg-[#070b14]/80 p-6 sm:p-8">
            <p class="text-xs uppercase tracking-[0.32em] text-cyan-100">Framework package</p>
            <h3 class="mt-4 text-3xl font-black tracking-[-0.055em] text-white sm:text-4xl">Litoho on npm</h3>
            <p class="mt-3 text-base italic text-cyan-100">Published full-stack framework package</p>
            <p class="mt-6 text-sm leading-7 text-slate-300">
              The npm package powers <code>npx litoho new</code>, project scaffolding, route generation, dev/build/start
              commands, UI helpers, middleware generation, and release verification workflows.
            </p>
            <div class="mt-7 flex flex-wrap gap-3">
              <a class="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-bold text-slate-950" href="https://www.npmjs.com/package/litoho">
                View on npm
              </a>
              <a class="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 text-sm font-bold text-white" href="https://litoho.dev/docs/getting-started">
                Read docs
              </a>
            </div>
          </article>
        </div>

        <article class="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p class="text-xs uppercase tracking-[0.32em] text-cyan-200">Education</p>
          <h3 class="mt-4 text-2xl font-black tracking-[-0.045em] text-white sm:text-3xl">
            Bachelor of Science in Data Science and Software Innovation
          </h3>
          <p class="mt-3 text-sm leading-7 text-slate-300">
            Ubon Ratchathani University | June 2025 - Present
          </p>
          <p class="mt-3 text-sm leading-7 text-slate-400">Currently in 2nd Year.</p>
        </article>
      </section>

      <section id="contact" class="border-t border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_28%),rgba(255,255,255,0.025)]">
        <div class="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
          <div>
            <p class="text-xs uppercase tracking-[0.32em] text-cyan-200">Contact</p>
            <h2 class="mt-4 text-3xl font-black tracking-[-0.055em] text-white sm:text-5xl">Let’s build something fast and useful.</h2>
            <p class="mt-5 text-sm leading-7 text-slate-400">
              Highly adaptable to new environments, quick learner, and proactively studies and implements emerging
              technologies. Native Thai speaker with basic/conversational English.
            </p>
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            ${contactLinks.map(
              (link) => html`
                <a class="rounded-[1.5rem] border border-white/10 bg-[#070b14]/80 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/40" href=${link.href}>
                  <p class="text-xs uppercase tracking-[0.28em] text-slate-500">${link.label}</p>
                  <p class="mt-3 text-sm font-semibold leading-7 text-white">${link.value}</p>
                </a>
              `
            )}
          </div>
        </div>
      </section>
    </main>
  `
};

export default page;
