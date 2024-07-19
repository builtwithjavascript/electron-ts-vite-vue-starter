import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath, URL } from 'url'
import { pluginExposeRenderer } from './vite.base.config.js'
import VuePlugin from '@vitejs/plugin-vue'

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'renderer'>
  const { root, mode, forgeConfigSelf } = forgeEnv
  const name = forgeConfigSelf.name ?? ''

  return {
    root,
    mode,
    base: './',
    build: {
      outDir: `.vite/renderer/${name}`
    },
    plugins: [pluginExposeRenderer(name), VuePlugin()],
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@': path.resolve(__dirname, './src')
        //'@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    },
    clearScreen: false
  } as UserConfig
})
