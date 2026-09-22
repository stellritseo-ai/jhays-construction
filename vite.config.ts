// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
  vite: {
    plugins: [
      {
        name: "api-send-email-middleware",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === "/api/send-email" && req.method === "POST") {
              try {
                let body = "";
                req.on("data", (chunk) => {
                  body += chunk;
                });
                req.on("end", async () => {
                  try {
                    const payload = JSON.parse(body || "{}");
                    const { sendEmailWithZoho } = await import("./src/lib/email");
                    const result = await sendEmailWithZoho(payload);
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ success: true, result }));
                  } catch (err: any) {
                    console.error("Error processing /api/send-email:", err);
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ success: false, error: err.message }));
                  }
                });
              } catch (e: any) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ success: false, error: e.message }));
              }
            } else {
              next();
            }
          });
        },
      },
    ],
  },
});
