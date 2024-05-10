import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Orders from "./pages/Orders";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
	return (
		<div className="bg-black dark:bg-black ">
			<Title />
			<Home />
			<Footer />
		</div>
	);
}
