import path from "node:path";
import { fileURLToPath } from "node:url";
import "@smoothy-fe/env/web";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../"),
  typedRoutes: true,
  reactCompiler: true,
  transpilePackages: [
    "@smoothy-fe/api-client",
    "@smoothy-fe/auth-client",
    "@smoothy-fe/env",
    "@smoothy-fe/types",
    "@smoothy-fe/ui",
  ],
};

export default nextConfig;
