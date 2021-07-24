import * as React from "react";
import Link from "next/link";

export default function Navbar(): JSX.Element {
	// const [visible, setVisible] = useState(false);

	// const toggleMenu = () => {
	//     setVisible(!visible);
	// };
	return (
		<nav className="max-w-3xl flex flex-row justify-between py-6 px-3 space-x-5">
			{/** Navbar */}
			{/** Logo */}
			<div>
				<Link href="/">
					<a className="font-semibole block sm:h-6 sm:text-2xl">
						RNVo
					</a>
				</Link>
			</div>
			{/** items */}
			<div className="flex items-center space-x-5">
				<div>
					<Link href="/">
						<a>Blog</a>
					</Link>
				</div>
				<div>
					<Link href="/">
						<a>Algorithm</a>
					</Link>
				</div>
				<div>
					<Link href="/">
						<a>TIL</a>
					</Link>
				</div>
				<div>
					<Link href="/">
						<a>About</a>
					</Link>
				</div>
				<div>
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					</button>
				</div>
				<div className="md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>
			</div>
		</nav>
	);
}
