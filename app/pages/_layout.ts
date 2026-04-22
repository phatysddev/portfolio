import { html } from "lit";
import type { LitoLayoutModule } from "@litoho/app";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" }
] as const;

const layout: LitoLayoutModule<{ appName: string }> = {
  load: () => ({
    appName: "Yodsavee Supachoktanasap"
  }),
  document: {
    title: "Yodsavee Supachoktanasap, Full Stack Developer",
    meta: [
      {
        name: "description",
        content:
          "Portfolio of Yodsavee Supachoktanasap, a Full Stack Developer and Data Science and Software Innovation student with experience building APIs, real-time interfaces, and POS systems."
      },
      { name: "author", content: "Yodsavee Supachoktanasap" },
      { property: "og:title", content: "Yodsavee Supachoktanasap, Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer with hands-on professional experience in API integrations, real-time frontend interfaces, and cloud deployment."
      },
      { property: "og:type", content: "website" }
    ],
    links: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }]
  },
  render: ({ children, data }) => html`
    <div class="min-h-screen bg-transparent">
      <header class="sticky top-0 z-30 border-b border-white/10 bg-[#05070d]/75 backdrop-blur-2xl">
        <div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" class="group inline-flex items-center gap-3">
            <span class="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-sm font-black text-cyan-100 transition group-hover:border-cyan-200">
              PY
            </span>
            <span class="hidden text-sm font-semibold uppercase tracking-[0.18em] text-white sm:inline lg:tracking-[0.24em]">${data.appName}</span>
            <span class="text-sm font-semibold uppercase tracking-[0.24em] text-white sm:hidden">Yodsavee</span>
          </a>

          <nav class="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            ${navItems.map(
              (item) => html`
                <a class="transition hover:text-cyan-100" href=${item.href}>${item.label}</a>
              `
            )}
          </nav>
        </div>

        <nav class="no-scrollbar flex gap-2 overflow-x-auto border-t border-white/10 px-4 py-2 text-xs text-slate-300 sm:px-6 md:hidden">
          ${navItems.map(
            (item) => html`
              <a class="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 transition hover:border-cyan-300/50 hover:text-white" href=${item.href}>
                ${item.label}
              </a>
            `
          )}
        </nav>
      </header>

      ${children}

      <footer class="border-t border-white/10 bg-black/20">
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Built with Litoho 0.1.4, Lit, SSR, and Tailwind CSS.</p>
          <p class="text-slate-500">© ${new Date().getFullYear()} Yodsavee Supachoktanasap. Open for collaboration.</p>
        </div>
      </footer>
    </div>
  `
};

export default layout;
