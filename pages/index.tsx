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
		<div className="flex flex-1 mb-auto max-w-xl mx-auto">
			{allPostsData.map(({ date, title, id }) => (
				<article key={id}>
					<h3>
						<Link href={`/posts/${id}`}>
							<a className="transition hover:text-indigo-500">
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
