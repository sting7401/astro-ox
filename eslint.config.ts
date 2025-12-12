import alpinejs from 'eslint-plugin-alpinejs';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import htmlParser from '@html-eslint/parser';
import js from '@eslint/js';
import { configs as litConfigs } from 'eslint-plugin-lit';
import oxlint from 'eslint-plugin-oxlint';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';
import tailwind from 'eslint-plugin-tailwindcss';
import ts from 'typescript-eslint';
import tseslint from 'typescript-eslint';

// import babelParser from '@babel/eslint-parser';

// import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
	// 1. 무시할 파일 및 폴더 설정 (중복 항목 정리)
	{
		ignores: [
			'**/node_modules/*',
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
			'**/.oxlintrc.json', // 중복 제거
			'src/styles/front-output.css',
		],
	},

	// 2. JS / TS 기본 권장 설정
	js.configs.recommended,
	ts.configs.recommended,
	tseslint.configs.recommended,
	tseslint.configs.stylistic,
	tailwind.configs['flat/recommended'],

	// 3. Astro 권장 설정
	eslintPluginAstro.configs.recommended,
	{
		files: ['*.astro'],
	},
	{
		files: ['**/*.astro/*.ts', '**/*.astro/*.js'],
		rules: {
			'import/order': 'off',
		},
	},

	// 4. HTML 파서 설정
	{
		files: ['**/*.html'], // <-- .html 파일에만 파서 적용
		languageOptions: {
			parser: htmlParser,
			parserOptions: {
				allowCustomAttributes: true,
			},
		},
	},

	// Alpine.js 규칙 적용 블록
	{
		files: ['**/*.{html,astro,ts,js}'],
		languageOptions: {
			parser: htmlParser,
		},
		plugins: {
			alpinejs,
		},
		rules: {
			'alpinejs/no-raw-dom-access': 'error',
			'alpinejs/no-unused-xrefs': 'error',
			'alpinejs/prefer-template-x-if': 'warn',
			// 'alpinejs/no-unused-x-data': 'warn', // ← 실제 플러그인에 없으면 제거
		},
	},

	// 5. Lit 플러그인 권장 설정 (JS/TS 파일에 적용)
	litConfigs['flat/recommended'],

	{
		files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
		languageOptions: {
			// parser: babelParser,
			parserOptions: {
				requireConfigFile: false,
				babelOptions: {
					// babelOptions 주석 해제하여 사용
					plugins: [
						['@babel/plugin-proposal-decorators', '@babel/plugin-syntax-decorators', { legacy: true }],
					],
				},
			},
		},
		rules: {
			'no-console': ['warn', { allow: ['info', 'debug', 'warn', 'error'] }],
			'no-debugger': 'warn',
			'no-fallthrough': 'error',
		},
	},

	// 5-1. Vue.js 관련 설정
	{
		files: ['**/*.vue'], // <-- .vue 파일에만 적용
		...pluginVue.configs['flat/recommended'],
		rules: {
			// ...
		},
		languageOptions: {
			sourceType: 'module',
			globals: {
				...globals.browser,
			},
		},
	},

	// 6. Svelte 관련 설정
	{
		files: ['**/*.{svelte,svelte.ts,svelte.js}'],
		...svelte.configs.recommended,
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['**/.svelte'],
				parser: ts.parser,
				svelteConfig,
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

	// 7. Oxlint 권장 설정
	...oxlint.configs['flat/recommended'],

	// 8. 전역 변수 설정
	{
		files: ['**/*.{html,ts,js}'],
		languageOptions: {
			env: {
				browser: true,
				es2022: true,
			},
			globals: {
				Alpine: 'readonly',
				Dropdown: 'readonly',
				HSStaticMethods: 'readonly',
			},
		},
	},

	// 9. Prettier 설정 (항상 마지막)
	prettier,
	eslintConfigPrettier,
	...svelte.configs.prettier,
]);
