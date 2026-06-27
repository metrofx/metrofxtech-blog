import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://metrofxtech.vercel.app',
  output: 'static',
  adapter: vercel({
    webAnalytics: false,
  }),
  markdown: {
    rehypePlugins: [
      ['rehype-raw', { allowElements: ['iframe'] }],
    ],
  },
});
