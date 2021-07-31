import "../styles/index.css";
import type { AppProps } from "next/app";
import Footer from "../components/footer";
import { DefaultSeo } from "next-seo";
import { SEO } from "../components/seo";
import { ThemeProvider } from "next-themes";
import Header from "../components/header";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ThemeProvider attribute="class">
			<div className="bg-white text-black dark:bg-choco dark:text-gray-200">
				<div className="flex flex-col max-w-5xl min-h-screen mx-auto px-6 mb-auto divide-y divide-gray-300 lg:px-0">
					<Header />

					<DefaultSeo {...SEO} />

					<div id="content" className="flex-auto">
						<Component {...pageProps} />
					</div>

					<Footer />
				</div>
			</div>
		</ThemeProvider>
	);
}
