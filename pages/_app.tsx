import "../styles/index.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Link from "next/link";
import Footer from "../components/footer";
import ThemeSwitch from "../components/themeSwitch";
import { DefaultSeo } from "next-seo";
import { SEO } from "../components/seo";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ThemeProvider attribute="class">
			<div className="bg-white text-black dark:bg-[#272822] dark:text-gray-200">
				<div className="max-w-5xl mx-auto h-screen px-6 flex flex-col lg:px-0 ">
					<header className="pt-12">
						<div className="flex items-center justify-between pr-3">
							<Link href="/">
								<a className="text-3xl font-bold md:hidden">
									RNVo
								</a>
							</Link>
							<Link href="/">
								<a className="hidden md:block text-3xl font-bold">
									Ro Ngoc Vo
								</a>
							</Link>
							<ThemeSwitch />
						</div>
						<Navbar />
					</header>
					<DefaultSeo {...SEO} />
					<div id="content" className="flex-1 my-8">
						<Component {...pageProps} />
					</div>

					<Footer />
				</div>
			</div>
		</ThemeProvider>
	);
}
export default MyApp;
