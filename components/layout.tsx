import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({
	children,
	home,
}: {
	children: ReactNode;
	home?: boolean;
}): JSX.Element {
	return (
		<div className="flex items-center max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col justify-between h-screen">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Ro Ngoc Vo - Blog" />
				<meta name="og:title" content="Ro Ngoc Vo - Blog" />
				<meta name="twitter:card" content="summary_large_image" />
				<title>Ro Ngoc Vo - Blog</title>
			</Head>
			<Navbar />
			<main className="flex flex-1 mb-auto max-w-3xl">{children}</main>
			{!home && (
				<div>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
			<Footer />
		</div>
	);
}
