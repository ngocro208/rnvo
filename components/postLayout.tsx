import Link from "next/link";
import React, { ReactNode } from "react";

export default function PostLayout({
	children,
	path = "/blog",
}: {
	children: ReactNode;
	path?: string;
}): JSX.Element {
	return (
		<div className="mx-auto prose dark:prose-dark md:prose-md lg:prose-lg overflow-y-auto">
			<main>{children}</main>
			<div>
				<Link href={path}>
					<a className="flex items-center transition hover:text-indigo-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 animate-back inline-block mr-2"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
								clipRule="evenodd"
							/>
						</svg>
						Back
					</a>
				</Link>
			</div>
		</div>
	);
}
