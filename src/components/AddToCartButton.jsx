import React from "react";
import Button from "./Button";
import { addToCart } from "../api/cart";

export default function AddToCartButton({ item, ...otherProps }) {
	let token = localStorage.getItem("token");
	return (
		<Button
			text={"Add to Cart"}
			{...otherProps}
			onClick={() => addToCart(token, item)}
		/>
	);
}
