import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as reactRouterDom from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Title from "./components/Title";
import Listings from "./pages/Listings";
import NewListings from "./pages/NewListings";
import ListingsDetails from "./pages/ListingsDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = reactRouterDom.createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/orders",
		element: <Cart />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/account",
		element: <Account />,
	},
	{
		path: "/listings",
		element: <Listings />,
	},
	{
		path: "/new-listings",
		element: <NewListings />,
	},
	{
		path: "/listing-details",
		element: <ListingsDetails />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

root.render(
	<React.StrictMode>
		<Title />
		<reactRouterDom.RouterProvider router={router} />
	</React.StrictMode>
);

// reportWebVitals(console.log);
