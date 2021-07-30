import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function Layout({
	children,
	home,
}: {
	children: ReactNode;
	home?: boolean;
}): JSX.Element {
	return (
		<div className="mx-auto prose md:prose-lg lg:prose-xl">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Ro Ngoc Vo - Blog" />
				<meta name="og:title" content="Ro Ngoc Vo - Blog" />
				<meta name="twitter:card" content="summary_large_image" />
				<title>Ro Ngoc Vo - Blog</title>
			</Head>
			<main className="flex flex-1 mb-auto max-w-3xl">{children}</main>
			{!home && (
				<div>
					<Link href="/">
						<a className="transition hover:text-indigo-500">
							← Back to home
						</a>
					</Link>
				</div>
			)}
		</div>
	);
}
