import alpinejs from '@astrojs/alpinejs';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import oxlintPlugin from 'vite-plugin-oxlint';
import path from 'node:path';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import { watchAndRun } from 'vite-plugin-watch-and-run';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		alpinejs({ entrypoint: '/src/entrypoint' }),
		solidJs({ devtools: false, include: ['**/solid/*'] }),
		react({ include: ['**/react/*'] }),
		vue({
			template: {
				compilerOptions: {
					// 대시(-)가 포함된 모든 태그를 커스텀 엘리먼트로 처리
					isCustomElement: (tag) => tag.includes('-'),
				},
			},
			customElement: true,
			include: ['**/*.vue', '**/*.ce.vue'],
			devtools: true,
		}),
	],
	compressHTML: true,
	//outDir: './cms-dist',
	vite: {
		// define: {
		// 	'globalThis.console': 'console',
		// 	'globalThis.Dropzone': 'Dropzone',
		// },
		plugins: [
			oxlintPlugin({
				configFile: '.eslint.config.ts',
				path: './src',
			}),
			watchAndRun([
				{
					name: 'gen',
					watch: 'src/**/*.{jsx,tsx,vue,js,ts,svelte}',
					run: 'bun run wc',
					watchKind: ['add', 'change', 'unlink'],
					delay: 500,
				},
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			]) as any,

			tailwindcss(),
		],
	},
});
