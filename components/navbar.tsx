import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { joinClassNames } from "../lib/utils";

const links = [
	{ name: "tech", href: "/tech" },
	{ name: "algorithm", href: "/algorithm" },
	{ name: "life", href: "/life" },
	{ name: "about", href: "/about" },
];

export default function Navbar(): JSX.Element {
	const router = useRouter();

	const isItemActive = (href: string): boolean =>
		router.pathname.startsWith(href);
	const isBlogPost = (name: string): boolean =>
		name === "tech" && router.pathname.startsWith("/posts/");

	return (
		<nav className="py-8">
			<ul className="flex flex-wrap justify-aound">
				{links.map(({ name, href }) => {
					return (
						<li key={name}>
							<Link href={href}>
								<a
									className={joinClassNames(
										"block m-2 font-mono text-2xl text-center transition transform hover:text-indigo-500",
										isItemActive(href) || isBlogPost(name)
											? "text-indigo-500"
											: ""
									)}
								>
									{name}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
