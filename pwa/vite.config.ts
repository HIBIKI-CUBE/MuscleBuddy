import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { SvelteKitPWA, type SvelteKitPWAOptions } from '@vite-pwa/sveltekit';
import mkcert from 'vite-plugin-mkcert';

const pwaOptions: SvelteKitPWAOptions = {
  manifest: {
    name: 'Muscle Buddy',
    short_name: 'MBuddy',
    description: '筋トレメニューや履歴を管理するアプリです',
    start_url: '/',
    scope: '/',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    background_color: '#BD913F',
    theme_color: '#916028',
    lang: 'ja',
  },
  injectManifest: {
    globPatterns: ['client/**/*.{ico,png,svg,webp,woff,woff2}'],
  },
  workbox: {
    globPatterns: ['client/**/*.{ico,png,svg,webp,woff,woff2}'],
  },
  devOptions: {
    enabled: true,
  },
};

export default defineConfig({
  plugins: [mkcert(), sveltekit(), SvelteKitPWA(pwaOptions)],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  server: {
    proxy: {},
  },
});
