import { defineConfig } from 'astro/config'
import db from '@astrojs/db'
import icon from 'astro-icon'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  integrations: [db(), icon()],
  experimental: {
    actions: true
  },
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs18.x' 
  })
})
