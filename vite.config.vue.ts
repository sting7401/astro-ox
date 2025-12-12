import { aliases } from './aliases.js';
import { defineConfig } from 'vite';
import devtools from 'solid-devtools/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import react from '@vitejs/plugin-react-oxc';
import solidPlugin from 'vite-plugin-solid';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

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
		vueDevTools(),
		svelte(),
		devtoolsJson(),
	],
	build: {
		outDir: './wc/vue',
		lib: {
			entry: path.resolve(__dirname, 'src/components/wc.vue.ts'),
			name: 'WebComponents',
			// fileName: 'main-bundle',
			fileName: (format) => `wc.vue.${format}.js`,
			formats: ['es', 'cjs'], // ✅ 포맷 추가
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: { vue: 'Vue' },
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
