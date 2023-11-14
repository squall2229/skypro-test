import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    base: "/skypro-test",
    plugins: [
        react(),
        svgr({
            include: "**/*.svg?react",
            exclude: "",
        }),
    ],
});
