import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    plugins: {
        "@tailwindcss/postcss": {},
        "postcss-import": {
            resolve(id) {
                if (id.startsWith("@/")) {
                    return path.resolve(
                        __dirname,
                        "src",
                        id.replace("@/", ""),
                    );
                }
                return id;
            },
        },
    },
};

export default config;
