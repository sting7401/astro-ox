import svelteConfig from './svelte.config.js';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import prettier from 'eslint-config-prettier';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import alpinejs from 'eslint-plugin-alpinejs';
import eslintPluginAstro from 'eslint-plugin-astro';
import { configs } from 'eslint-plugin-lit';
import oxlint from 'eslint-plugin-oxlint';
import svelte from 'eslint-plugin-svelte';
import tailwind from 'eslint-plugin-tailwindcss';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import path from 'path';
import ts from 'typescript-eslint';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

// --- 초기 설정 ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
});

// import babelParser from '@babel/eslint-parser';

// import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
	// 1. 무시할 파일 및 폴더 설정 (Ignore Files)
	{
		ignores: [
			'**/node_modules/*',
			'*.d.ts',
			'**/coverage',
			'dist/',
			'build/',
			'**/.next/*',
			'**/.svelte-kit/',
			'**/.astro/',
			'**/.vscode/',
			'examples/',
			'static/',
			'public/',
			'public/libs/**',
			'src/paraglide/',
			'**/.bun/',
			'pnpm-lock.yaml',
			'npm-debug.log',
			'package-lock.json',
			'bun.lockb',
			'wc/**',
			'project.inlang/',
			'messages/',
			'**/.tsconfig.json',
			'**/.oxlintrc.json',
			'src/styles/front-output.css',
		],
	},

	// 2. JS / TS / Tailwind / Astro 기본 권장 설정
	js.configs.recommended, // JS 기본 규칙
	ts.configs.recommended, // TS 기본 규칙
	tseslint.configs.recommended,
	tseslint.configs.stylistic, // TS 스타일 규칙
	tailwind.configs['flat/recommended'], // Tailwind CSS 규칙
	eslintPluginAstro.configs.recommended, // Astro 기본 규칙

	// 3. Astro 파일별 추가 설정
	{
		// Astro 내부의 script/style 블록에 대한 규칙 오버라이드
		files: ['**/*.astro/*.ts', '**/*.astro/*.js'],
		rules: {
			'import/order': 'off', // Astro 컴포넌트 내부 스크립트에서는 import 순서 규칙을 끕니다.
		},
	},

	// 4. HTML 파서 설정
	{
		files: ['**/*.html'], // .html 파일에만 파서 적용
		languageOptions: {
			parser: htmlParser,
			parserOptions: {
				allowCustomAttributes: true,
			},
		},
	},

	// 5. Alpine.js 규칙 적용 (HTML, Astro, TS, JS 파일에 적용)
	{
		files: ['**/*.{html,astro,ts,js}'],
		// NOTE: HTML/Alpine.js 구문을 위해 파서를 다시 설정합니다.
		// 이 블록이 이전의 TS/JS 블록을 오버라이드할 수 있습니다.
		languageOptions: {
			parser: htmlParser,
		},
		plugins: {
			html,
			alpinejs,
		},
		rules: {
			'alpinejs/no-raw-dom-access': 'error',
			'alpinejs/no-unused-xrefs': 'error',
			'alpinejs/prefer-template-x-if': 'warn',
			// 'alpinejs/no-unused-x-data': 'warn', // ← 플러그인에 해당 규칙이 없으면 제거
		},
	},

	// 6. Lit/Web Component 설정 (open-wc 및 lit-a11y 포함)
	{
		files: ['**/*.{ts,js}'],
		...compat.plugins('lit-a11y'), // 접근성
		...compat.extends('plugin:wc/recommended'), // 웹 컴포넌트 표준
		...configs['flat/recommended'],
	},

	// 7. 공통 JS/TS 파일 규칙
	{
		files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
		languageOptions: {
			// babel parser (주석 처리됨)
			// parser: babelParser,
			parserOptions: {
				requireConfigFile: false,
				// babelOptions 주석 해제하여 사용
				// babelOptions: {
				//     plugins: [
				//         ['@babel/plugin-proposal-decorators', '@babel/plugin-syntax-decorators', { legacy: true }],
				//     ],
				// },
			},
		},
		rules: {
			'no-console': ['warn', { allow: ['info', 'debug', 'warn', 'error'] }],
			'no-debugger': 'warn',
			'no-fallthrough': 'error',
		},
	},

	// 8. Vue.js 관련 설정
	{
		files: ['**/*.vue'], // .vue 파일에만 적용
		...pluginVue.configs['flat/recommended'],
		rules: {
			// Vue 관련 사용자 정의 규칙 추가
		},
		languageOptions: {
			sourceType: 'module',
			globals: {
				...globals.browser,
			},
		},
	},

	// 9. Svelte 관련 설정
	{
		files: ['**/*.{svelte,svelte.ts,svelte.js}'],
		...svelte.configs.recommended,
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['**/.svelte'],
				parser: ts.parser,
				svelteConfig, // Svelte 컴파일러 설정 주입
			},
		},
	},

	// eslint style - prettier 대체
	// {
	// 	plugins: { '@stylistic': stylistic },
	// 	rules: {
	// 		'@stylistic/indent': ['error', 2],
	// 		'@stylistic/quotes': ['error', 'single'],
	// 		'@stylistic/semi': ['error', 'always'],
	// 		'@stylistic/object-curly-spacing': ['error', 'always'],
	// 		// rules...
	// 	},
	// },

	// 10. Oxlint 권장 설정 (성능 최적화)
	...oxlint.configs['flat/recommended'],

	// 11. 전역 변수 설정
	{
		files: ['**/*.{html,ts,js}'],
		languageOptions: {
			globals: {
				...globals.browser, // browser: true 대체
				...globals.es2022, // es2022: true 대체
				Alpine: 'readonly', // Alpine.js 전역 변수
				Dropdown: 'readonly',
				HSStaticMethods: 'readonly', // Preline/기타 라이브러리 전역 변수
			},
		},
	},

	// 12. Prettier 설정 (항상 가장 마지막에 위치)
	// Prettier와 충돌하는 모든 스타일 규칙을 비활성화하고, Prettier 규칙을 적용합니다.
	prettier,
	eslintConfigPrettier,
	...svelte.configs.prettier,
]);
