import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
    base: "/skypro-test/",
    plugins: [
        ghPages(),
        react(),
        svgr({
            include: "**/*.svg?react",
            exclude: "",
        }),
    ],
});
