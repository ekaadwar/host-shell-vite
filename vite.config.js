import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import pkg from './package.json'

const deps = pkg.dependencies

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        hotels: 'http://127.0.0.1:5001/assets/remoteEntry.js',
        coliving: 'http://127.0.0.1:5002/assets/remoteEntry.js',
        kost: {
          external: 'http://127.0.0.1:5003/remoteEntry.js',
          from: 'webpack',
          format: 'var'
        }
      },
      shared: {
        vue: {
          singleton: true,
          eager: true,
          requiredVersion: deps.vue
        },
        pinia: {
          singleton: true,
          requiredVersion: deps.pinia
        },
        'vue-router': {
          singleton: true,
          requiredVersion: deps['vue-router']
        }
      }
    })
  ],
  build: {
    target: 'esnext'
  },
  optimizeDeps: {
    exclude: ['hotels', 'coliving', 'kost']
  },
  server: {
    host: '127.0.0.1',
    port: 5000,
    strictPort: true,
    cors: true
  }
})
