import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import type { Config } from "tailwindcss";

export default defineConfig({

  darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
  plugins: [
    tailwindcss(),
  ],
})