import { NextSeoProps } from "next-seo/lib/types";

export interface StaticPostData {
	readonly slug: string;
	readonly contentHtml?: string;
	readonly date: string;
	readonly title: string;
}

export interface StaticPostSlug {
	params: {
		slug: string;
	};
}

export interface SEOProps extends NextSeoProps {
	readonly url: string;
}

export interface BlogSEOProps extends SEOProps {
	readonly summary: string;
	readonly date: string;
	readonly lastMod: string;
	readonly tags?: string[];
	readonly images?: string[];
}
