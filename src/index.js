import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div
			className="bg-black dark:bg-black grid w-screen h-screen overflow-x-hidden"
			style={{
				display: "grid ",
				gridTemplateColumns: "min-content auto",
				gridTemplateRows: "auto min-content",
			}}
		>
			<Navbar />
			<div className="flex flex-col ">
				<div className="text-primary text-5xl font-primary self-center ">
					The Muslim Shop
				</div>
				<Home />
				<Footer />
			</div>
		</div>
	</React.StrictMode>
);

reportWebVitals(console.log);
