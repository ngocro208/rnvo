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
			flex: {
				0.7: "0.7",
			},
			colors: {
				choco: "#39393a",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							textDecoration: "none",
						},
					},
				},
				dark: {
					css: {
						color: theme("colors.gray.300"),
						a: {
							color: theme("colors.blue.400"),
							"&:hover": {
								color: theme("colors.blue.600"),
							},
							code: { color: theme("colors.blue.400") },
							textDecoration: "none",
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
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				back: {
					"0%, 100%": {
						transform: "translateX(25%)",
						"animation-timing-function":
							"cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
						transform: "translateX(0)",
						"animation-timing-function":
							"cubic-bezier(0, 0, 0.2, 1)",
					},
				},
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				"ping-fast": "ping 0.5s cubic-bezier(0, 0, 0.2, 1) infinite",
				back: "back 1s infinite",
			},
		},
	},
	variants: {
		typography: ["dark"],
		extend: {
			borderBottom: ["header"],
			animation: ["hover", "focus"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
