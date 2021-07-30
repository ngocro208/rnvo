module.exports = {
	mode: "jit",
	purge: [
		"./components/**/*.ts(x)?",
		"./pages/**/*.ts(x)?",
		"./lib/**.ts(x)?",
	],
	darkMode: "class",
	theme: {
		extend: {
			borderWidth: {
				1: "1px",
			},
		},
	},
	variants: {
		extend: {
			borderBottom: ["header"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
