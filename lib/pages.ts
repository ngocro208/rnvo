import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { StaticPostData, StaticPostSlug } from "./types";

const postsDirectory = path.join(process.cwd(), "data/posts");
const algoPostsDirectory = path.join(process.cwd(), "data/algoPosts");

export function getSortedPostsData(): StaticPostData[] {
	return getSortedPagesData(postsDirectory);
}

export function getAllPostIds(): StaticPostSlug[] {
	return getAllPageIds(postsDirectory);
}

export async function getPostData(slug: string): Promise<StaticPostData> {
	return getPageData(postsDirectory, slug);
}

export function getSortedAlgoPostData(): StaticPostData[] {
	return getSortedPagesData(algoPostsDirectory);
}

export function getAllAlgoPostIds(): StaticPostSlug[] {
	return getAllPageIds(algoPostsDirectory);
}

export async function getAlgoPostData(slug: string): Promise<StaticPostData> {
	return getPageData(algoPostsDirectory, slug);
}

function getSortedPagesData(directory: string): StaticPostData[] {
	const fileNames = fs.readdirSync(directory);
	const allPostsData = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");

		const fullPath = path.join(directory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		const matterResult = matter(fileContents);

		return {
			slug,
			...(matterResult.data as { date: string; title: string }),
		};
	});
	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function getAllPageIds(directory: string): StaticPostSlug[] {
	const fileNames = fs.readdirSync(directory);
	return fileNames.map((fileName) => {
		return {
			params: {
				slug: fileName.replace(/\.md$/, ""),
			},
		};
	});
}

async function getPageData(
	directory: string,
	slug: string
): Promise<StaticPostData> {
	const fullPath = path.join(directory, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	return {
		slug,
		contentHtml,
		...(matterResult.data as { date: string; title: string }),
	};
}
