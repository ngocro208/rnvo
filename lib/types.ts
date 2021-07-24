export type StaticPostData = {
	id: string;
	contentHtml?: string;
	date: string;
	title: string;
};

export type StaticPostId = {
	params: {
		id: string;
	};
};
