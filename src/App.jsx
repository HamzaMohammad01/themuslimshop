import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Account from "./pages/Account";

export default function App() {
	return (
		<div className="bg-black dark:bg-black overflow-x-hidden">
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(5, minmax(0, auto))",
					gridTemplateRows: "repeat(5, minmax(0, auto))",
				}}
			>
				<div style={{ gridColumn: "span 5 / span 5" }}>
					<Title />
				</div>
				<div
					style={{ gridRow: "span 3 / span 3", gridRowStart: "2" }}
					className="flex items-center w-min h-lvh"
				>
					<Navbar />
				</div>
				<div
					style={{
						gridColumn: "span 4 / span 4",
						gridRow: "span 3 / span 3",
						gridRowStart: "2",
					}}
				>
					<Account />
				</div>
				<div
					style={{ gridColumn: "span 5 / span 5", gridRowStart: "5" }}
				>
					{/* <Footer /> */}
				</div>
			</div>
		</div>
	);
}
