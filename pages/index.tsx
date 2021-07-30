import React from "react";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

export default function Home(): JSX.Element {
	return <div>Homepage</div>;
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
