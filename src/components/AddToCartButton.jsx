import React from "react";
import Button from "./Button";
import { addToCart } from "../api/cart";
import showToast from "./showToast";

export default function AddToCartButton({ item, ...otherProps }) {
	let token = localStorage.getItem("token");
	return (
		<Button
			text={"Add to Cart"}
			{...otherProps}
			onClick={() => {
				addToCart(token, item);
				showToast("Added to Cart", "adCart");
			}}
		/>
	);
}
