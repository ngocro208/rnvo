import PostLayout from "../../components/postLayout";
import { getAlgoPostData, getAllAlgoPostIds } from "../../lib/pages";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";

export default function AlgoPost({
	algoPostData,
}: {
	algoPostData: {
		title: string;
		date: string;
		contentHtml: string;
	};
}): JSX.Element {
	return (
		<PostLayout path="/algorithm">
			<Head>
				<title>{algoPostData.title} - RNVo Blog</title>
			</Head>
			<article>
				<h2>{algoPostData.title}</h2>
				<div>
					<Date dateString={algoPostData.date} />
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: algoPostData.contentHtml,
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
		props: {
			algoPostData,
		},
	};
};
