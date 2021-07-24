import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { GetStaticProps } from "next";
import Date from "../components/date";

export default function Home({
	allPostsData,
}: {
	allPostsData: {
		date: string;
		title: string;
		id: string;
	}[];
}): JSX.Element {
	return (
		<div className="flex items-center max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col justify-between h-screen">
			<Head>
				<title>Ro Ngoc Vo</title>
				<meta name="description" content="Ro Ngoc Vo's Blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header id="header" className="flex items-center">
				<h1 className="py-20">
					<Link href="/">
						<a className="font-semibold sm:text-6xl text-blue-400 hover:text-blue-300 tracking-widest">
							Ro Ngoc Vo
						</a>
					</Link>
				</h1>
			</header>
			<div id="content" className="flex flex-1 mb-auto max-w-3xl">
				{allPostsData.map(({ date, title, id }) => (
					<article key={id}>
						<h3>
							<Link href={`/posts/${id}`}>
								<a className="hover:text-blue-200 transition-colors">
									{title}
								</a>
							</Link>
						</h3>
						<div>
							<span className="text-sm">
								<Date dateString={date} />
							</span>
						</div>
					</article>
				))}
			</div>
			<Footer />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
