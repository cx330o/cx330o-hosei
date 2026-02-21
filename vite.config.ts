import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import {  VitePWA } from 'vite-plugin-pwa'
import {ViteImageOptimizer} from "vite-plugin-image-optimizer"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    VitePWA({
      workbox:{
        maximumFileSizeToCacheInBytes: 5000000,
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webp,woff,woff2}',
          '**/*.json'
        ],
        runtimeCaching: [
          {
            urlPattern: /\.json$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'timetable-data',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24
              }
            }
          }
        ]
      },
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon_144x144.png', 'robots.txt'],
      injectRegister: 'auto',
      manifest: {
        name: '娉曟斂銈儯銉炽儜銈广儕銉?,
        short_name: '銈儯銉炽儜銈广儕銉?,
        description: '娉曟斂澶у鐢熴伄銇熴倎銇浕杌娿兓銉愩偣鏅傚埢銈€儣銉?,
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon_192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon_512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icon_512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icon_512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    }),ViteImageOptimizer({
      webp:{
        quality:10,
        
      }
    })
  ],
  base:"./",
  server: {
    proxy: {
      "/sns": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sns/, ""),
      },
      "/socket.io": {
        target: "http://localhost:5000",
        changeOrigin: true,
        ws: true,
      },
    },
  },

})
// updated: バンドルサイズの最適化
