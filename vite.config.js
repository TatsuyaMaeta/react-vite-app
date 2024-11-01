import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const github = import.meta.env.VITE_GITHUB_PAGES;

// https://vite.dev/config/
export default defineConfig({
    base: github // この行を追加
        ? "reactailwind" // この行を追加
        : "./", // この行を追加
    plugins: [react()],
    define: {
        "process.env": {},
    },
});
