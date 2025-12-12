import { aliases } from './aliases.js';
import { defineConfig } from 'vite';
import devtools from 'solid-devtools/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import path from 'node:path';
import react from '@vitejs/plugin-react-oxc';
import solidPlugin from 'vite-plugin-solid';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { watchAndRun } from 'vite-plugin-watch-and-run';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	root: '.',
	resolve: { alias: aliases },
	define: {
		'process.env.NODE_ENV': JSON.stringify('production'),
	},
	plugins: [
		react(),
		devtools(),
		solidPlugin(),
		enhancedImages(),
		tailwindcss(),
		vue({
			template: {
				compilerOptions: {
					// 대시(-)가 포함된 모든 태그를 커스텀 엘리먼트로 처리
					isCustomElement: (tag) => tag.includes('-'),
				},
			},
			customElement: true,
			include: ['**/*.vue', '**/*.ce.vue'],
		}),
		svelte(),
		devtoolsJson(),
		watchAndRun([
			{
				name: 'gen',
				watch: path.resolve('src/**/*.{jsx,tsx,vue,js,ts,svelte}'),
				run: 'bun run wc',
				// watchKind: ['add', 'change', 'unlink'], // (default) ['add', 'change', 'unlink'],
				// delay: 500,
			},
		]),
		{
			name: 'remove-unwanted-public',
			async writeBundle() {
				const foldersToRemove = [
					'wc/lit/api',
					'wc/lit/html',
					'wc/lit/css',
					'wc/lit/dummy',
					'wc/lit/libs',
					'wc/lit/images',
					'wc/vue/api',
					'wc/vue/html',
					'wc/vue/css',
					'wc/vue/dummy',
					'wc/vue/libs',
					'wc/vue/images',
					'wc/svelte/api',
					'wc/svelte/html',
					'wc/svelte/css',
					'wc/svelte/dummy',
					'wc/svelte/libs',
					'wc/svelte/images',
					'mockServiceWorker.js',
				];

				for (const folder of foldersToRemove) {
					await fs.rm(folder, { recursive: true, force: true });
				}
			},
		},
	],
	build: {
		outDir: './wc/svelte',
		lib: {
			entry: path.resolve(__dirname, 'src/components/wc.sv.ts'),
			name: 'WebComponents',
			// fileName: 'main-bundle',
			fileName: (format) => `wc.sv.${format}.js`,
			formats: ['es', 'cjs'], // ✅ 포맷 추가
		},
		rollupOptions: {
			external: ['svelte'],
			output: {
				globals: { svelte: 'Svelte' },
				// ✨ CSS와 기타 자산 파일 이름 지정
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith('.css')) {
						// JS 파일 이름 패턴을 따라감
						const format = assetInfo.name.includes('cjs') ? 'cjs' : 'es';

						return `main-bundle.${format}.css`;
					}

					return '[name].[ext]';
				},
			},
		},
	},
});
