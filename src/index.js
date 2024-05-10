import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as reactRouterDom from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Title from "./components/Title";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = reactRouterDom.createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/orders",
		element: <Orders />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/account",
		element: <Account />,
	},
]);

root.render(
	<React.StrictMode>
		<Title />
		<reactRouterDom.RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals(console.log);
