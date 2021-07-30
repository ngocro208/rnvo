import { PageSeo } from "../components/seo";
import siteMetadata from "../data/siteMetadata.json";
import Image from "next/image";
import SocialIcon from "../components/socialIcon";

export default function About(): JSX.Element {
	return (
		<>
			<PageSeo
				title={`About - ${siteMetadata.author}`}
				description={`About me - ${siteMetadata.author}`}
				url={`${siteMetadata.siteUrl || ""}/about`}
			/>
			<div className="flex flex-col items-center xl:flex-row space-y-2 xl:justify-around xl:  xl:space-y-0">
				<div className="flex flex-col items-center pt-8 space-x-2">
					<Image
						src={siteMetadata.image}
						width={192}
						height={192}
						alt="avatar"
						className="rounded-full hover:animate-wiggle"
					/>
					<h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
						{siteMetadata.author}
					</h3>
					{["Software Engineer", "Danang, Vietnam"].map(
						(meta, index) => (
							<div
								key={index}
								className="text-gray-500 dark:text-gray-400"
							>
								{meta}
							</div>
						)
					)}
					<div className="flex pt-6 space-x-3">
						{Object.keys(siteMetadata.socials || {}).map(
							(platform) => (
								<SocialIcon
									key={platform}
									platform={platform}
								/>
							)
						)}
					</div>
				</div>
				<div className="lg:flex-0.7 pt-8 pb-8 prose dark:prose-dark md:prose-md lg:prose-lg max-w-none">
					<p>Hi Mate,</p>
					<p>
						Welcome to my blog where I share codes, algorithm (most
						are{" "}
						<a
							target="_blank"
							href="https://leetcode.com/"
							className="hover:text-indigo-500 transition"
							rel="noopener noreferrer"
						>
							Leetcode
						</a>{" "}
						problems) and my feelings.
					</p>
				</div>
			</div>
		</>
	);
}
