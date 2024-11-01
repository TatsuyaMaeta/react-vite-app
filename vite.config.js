import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    base: "/react-vite-app/", // この行を追加
    plugins: [react()],
    
});
