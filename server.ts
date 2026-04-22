import { loadLitoAppFromManifest } from "@litoho/app";
import { resolve } from "node:path";
import { startLitoNodeApp, withRateLimit, withRequestTimeout, withSecurityHeaders } from "@litoho/server";
import { apiModulePaths } from "./src/generated/api-manifest";
import { pageManifest } from "./src/generated/page-manifest";

const manifestBaseUrl = new URL("./src/generated/", import.meta.url);
const app = await loadLitoAppFromManifest({
  manifestBaseUrl,
  pageManifest,
  apiModulePaths
});

await startLitoNodeApp({
  appName: "Phat Yotsavee Portfolio",
  rootDir: resolve(process.cwd()),
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  port: Number(process.env.PORT ?? 3000),
  pages: app.pages,
  apiRoutes: app.apiRoutes,
  middlewares: [
    withRequestTimeout({ timeoutMs: 10_000 }),
    withRateLimit({ limit: 240, windowMs: 60_000 }),
    withSecurityHeaders(),
    ...app.middlewares
  ],
  notFoundPage: app.notFoundPage,
  errorPage: app.errorPage
});

console.log(`Litoho app is running at http://localhost:${process.env.PORT ?? 3000}`);
