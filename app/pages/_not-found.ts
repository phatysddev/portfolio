import { html } from "lit";
import type { LitoNotFoundModule } from "@litoho/app";

const page: LitoNotFoundModule = {
  document: {
    title: "Page not found, Phat Yotsavee"
  },
  render: () => html`
    <main class="mx-auto flex min-h-[calc(100svh-6.75rem)] w-full max-w-4xl flex-col justify-center px-4 py-16 sm:px-6 lg:min-h-[calc(100svh-4rem)] lg:px-8">
      <p class="text-xs uppercase tracking-[0.32em] text-cyan-200">404</p>
      <h1 class="mt-5 text-4xl font-black tracking-[-0.06em] text-white sm:text-6xl">This page is not in the manifest.</h1>
      <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300">
        The route may have moved. Head back to the portfolio and continue from the featured work section.
      </p>
      <a class="mt-8 inline-flex min-h-12 w-fit items-center rounded-full bg-white px-6 text-sm font-bold text-slate-950" href="/">
        Back to portfolio
      </a>
    </main>
  `
};

export default page;
