import siteMetadata from "../data/siteMetadata.json";
import Mail from "./icons/mail";
import Github from "./icons/github";
import Linkedin from "./icons/linkedin";
import Twitter from "./icons/twitter";

const socials = {
	email: {
		Icon: Mail,
		href: `mailto:${siteMetadata.socials.email}`,
	},
	github: {
		Icon: Github,
		href: siteMetadata.socials.github,
	},
	linkedin: {
		Icon: Linkedin,
		href: siteMetadata.socials.linkedin,
	},
	twitter: {
		Icon: Twitter,
		href: siteMetadata.socials.twitter,
	},
};

export interface SocialIconProps {
	readonly platform: string;
	readonly size?: number;
}

const SocialIcon = ({
	platform,
	size = 8,
}: SocialIconProps): JSX.Element | null => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { Icon, href } = socials[platform] || {};
	if (!href) return null;

	return (
		<a
			className="text-sm text-gray-500 transition hover:text-gray-600"
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			<span className="sr-only">{platform}</span>
			<Icon
				className={`fill-current text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 h-${size} w-${size}`}
			/>
		</a>
	);
};
export default SocialIcon;
