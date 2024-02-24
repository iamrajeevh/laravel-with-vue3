import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'resources/js/') },
            { find: '@view', replacement: path.resolve(__dirname, 'resources/js/views') },
            { find: '@routes', replacement: path.resolve(__dirname, 'resources/js/routes') },
        ]
    }
});
