export const joinClassNames = (...classes: string[]): string =>
	classes.filter(Boolean).join(" ");
