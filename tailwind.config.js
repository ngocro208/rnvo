const { spacing } = require("tailwindcss/defaultTheme");
module.exports = {
	mode: "jit",
	darkMode: "class",
	purge: [
		"./components/**/*.ts(x)?",
		"./pages/**/*.ts(x)?",
		"./lib/**.ts(x)?",
	],
	theme: {
		extend: {
			borderWidth: {
				1: "1px",
			},
			typography: (theme) => ({
				dark: {
					css: {
						color: theme("colors.gray.300"),
						a: {
							color: theme("colors.blue.400"),
							"&:hover": {
								color: theme("colors.blue.600"),
							},
							code: { color: theme("colors.blue.400") },
						},
						blockquote: {
							borderLeftColor: theme("colors.gray.700"),
							color: theme("colors.gray.300"),
						},
						"h1,h2,h3,h4": {
							color: theme("colors.gray.100"),
							"scroll-margin-top": spacing[32],
						},
						hr: { borderColor: theme("colors.gray.700") },
						ol: {
							li: {
								"&:before": { color: theme("colors.gray.500") },
							},
						},
						ul: {
							li: {
								"&:before": {
									backgroundColor: theme("colors.gray.500"),
								},
							},
						},
						strong: { color: theme("colors.gray.300") },
						thead: {
							color: theme("colors.gray.100"),
						},
						tbody: {
							tr: {
								borderBottomColor: theme("colors.gray.700"),
							},
						},
					},
				},
			}),
		},
	},
	variants: {
		typography: ["dark"],
		extend: {
			borderBottom: ["header"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
