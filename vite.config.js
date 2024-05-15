import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as fs from 'node:fs'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: '0.0.0.0',
        port: '443',
        https: {
            key: fs.readFileSync('ssl-cert/key.pem'),
            cert: fs.readFileSync('ssl-cert/cert.pem')
        },
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        manifest: true,
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL('./index.html', import.meta.url)),
                '404': fileURLToPath(new URL('./404.html', import.meta.url))
            }
        }
    }
})
