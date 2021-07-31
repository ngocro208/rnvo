import Link from "next/link";
import ThemeSwitch from "./themeSwitch";
import Navbar from "./navbar";

export default function Header(): JSX.Element {
	return (
		<header className="pt-12">
			<div className="flex items-center justify-between pr-3">
				<Link href="/">
					<a className="text-3xl font-bold md:hidden">RNVo</a>
				</Link>
				<Link href="/">
					<a className="hidden md:block text-3xl font-bold">
						Ro Ngoc Vo
					</a>
				</Link>
				<ThemeSwitch />
			</div>
			<Navbar />
		</header>
	);
}
