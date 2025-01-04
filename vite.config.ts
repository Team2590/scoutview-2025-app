import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            workbox: {
                globPatterns: ['**/*'],
                cleanupOutdatedCaches: true
            },
            includeAssets: [
                '**/*',
            ],
            manifest: {
                theme_color: '#f69435',
                background_color: '#f69435',
                display: 'standalone',
                scope: '/',
                start_url: '/',
                short_name: 'Scoutview 2024',
                description: 'Nemesis Scoutview 2024',
                name: 'Nemesis Scoutview 2024',
                icons: [
                    {
                        src: '/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any'
                    },
                    {
                        src: '/icon-256x256.png',
                        sizes: '256x256',
                        type: 'image/png',
                        purpose: 'any'
                    },
                    {
                        src: '/icon-384x384.png',
                        sizes: '384x384',
                        type: 'image/png',
                        purpose: 'any'
                    },
                    {
                        src: '/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any'
                    }
                ],
            },
        }),
    ],
})
