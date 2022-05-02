import PostLayout from "../../components/postLayout";
import { getAllPostIds, getPostData } from "../../lib/pages";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Post({
	postData,
}: {
	postData: {
		title: string;
		date: string;
		contentHtml: string;
	};
}): JSX.Element {
	return (
		<PostLayout>
			<Head>
				<title>{postData.title} - RNVo Blog</title>
			</Head>
			<article>
				<h2>{postData.title}</h2>
				<div
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</article>
		</PostLayout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params?.slug as string);
	return {
		props: {
			postData,
		},
	};
};
