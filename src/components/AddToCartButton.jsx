import React from "react";
import Button from "./Button";
import { addToCart } from "../api/cart";
import showToast from "./showToast";
import { addtoLocalCart } from "../api/localCart";

export default function AddToCartButton({ item, ...otherProps }) {
	let token = localStorage.getItem("token");
	return (
		<Button
			text={"Add to Cart"}
			{...otherProps}
			onClick={() => {
				if (token) {
					addToCart(token, item);
				} else {
					addtoLocalCart(item);
				}
				showToast("Added to Cart", "adCart");
			}}
		/>
	);
}
