import Head from "next/head";
import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../../lib/posts";
import Date from "../../components/date";

export default function Posts({
	allPostsData,
}: {
	allPostsData: {
		date: string;
		title: string;
		slug: string;
	}[];
}): JSX.Element {
	return (
		<div id="content" className="flex flex-1 mb-auto max-w-xl mx-auto">
			{allPostsData.map(({ date, title, slug }) => (
				<article key={slug}>
					<h3>
						<Link href={`/posts/${encodeURIComponent(slug)}`}>
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
