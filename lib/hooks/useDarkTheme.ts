import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function useDarkTheme(): [boolean, (theme: string) => void] {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	//  Avoid Hydration Mismatch
	useEffect(() => setMounted(true), []);

	const isDark = mounted && resolvedTheme === "dark";
	return [isDark, setTheme];
}
