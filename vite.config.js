import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import pkg from "./package.json";

const deps = pkg.dependencies;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const devHost = env.VITE_DEV_HOST || "127.0.0.1";
  const devPort = Number(env.VITE_DEV_PORT || 5000);

  return {
    plugins: [
      vue(),
      federation({
        name: "host",
        remotes: {
          hotels: env.VITE_REMOTE_HOTEL,
          // coliving: "http://127.0.0.1:5002/assets/remoteEntry.js",
          coliving: env.VITE_REMOTE_COLIVING,
          kost: {
            // external: "http://127.0.0.1:5003/remoteEntry.js",
            external: env.VITE_REMOTE_KOST,
            from: "webpack",
            format: "var",
          },
        },
        shared: {
          vue: {
            singleton: true,
            eager: true,
            requiredVersion: deps.vue,
          },
          pinia: {
            singleton: true,
            requiredVersion: deps.pinia,
          },
          "vue-router": {
            singleton: true,
            requiredVersion: deps["vue-router"],
          },
        },
      }),
    ],
    build: {
      target: "esnext",
    },
    optimizeDeps: {
      exclude: ["hotels", "coliving", "kost"],
    },
    server: {
      host: devHost,
      port: devPort,
      strictPort: true,
      cors: true,
    },
  };
});
