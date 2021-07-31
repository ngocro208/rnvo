import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import BlogDate from "../components/date";
import { getSortedPostsData } from "../lib/pages";

export default function Life({
	postsData,
}: {
	postsData: {
		date: string;
		title: string;
		slug: string;
	}[];
}): JSX.Element {
	return (
		<div className="category-container">
			{postsData &&
				postsData.map(({ date, title, slug }) => (
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
								<BlogDate dateString={date} />
							</span>
						</div>
					</article>
				))}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const postsData = getSortedPostsData();
	return {
		props: {
			postsData,
		},
	};
};
