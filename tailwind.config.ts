import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";

export default ({
	content: ["./index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Quicksand", "sans"],
				mono: ["JetBrains Mono", "monospace"],
			},
		},
	},
	plugins: [typographyPlugin],
} satisfies Config);
