import PostLayout from "../../components/postLayout";
import { getAlgoPostData, getAllAlgoPostIds } from "../../lib/pages";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { StaticPostData } from "../../lib/types";

export default function AlgoPost({
	date,
	title,
	url,
	contentHtml,
}: StaticPostData): JSX.Element {
	return (
		<PostLayout path="/algorithm">
			<Head>
				<title>{title} - RNVo Blog</title>
			</Head>
			<article>
				<h2>
					<a href={url}>{title}</a>
				</h2>
				<div
					dangerouslySetInnerHTML={{
						__html: contentHtml || "",
					}}
				/>
			</article>
		</PostLayout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllAlgoPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const algoPostData = await getAlgoPostData(params?.slug as string);
	return {
		props: algoPostData,
	};
};
