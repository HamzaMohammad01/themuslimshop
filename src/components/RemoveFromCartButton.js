import React from "react";
import Button from "./Button";
import { removeFromCart } from "../api/cart";
import { useNavigate } from "react-router-dom";

export default function RemoveFromCartButton({ cb, item, ...otherProps }) {
	const navigate = useNavigate();
	let token = localStorage.getItem("token");
	return (
		<Button
			text={"Remove from Cart"}
			otherStyles={"!bg-red-600"}
			{...otherProps}
			onClick={async () => {
				await removeFromCart(token, item);
				cb();
				// navigate("/orders");
			}}
		/>
	);
}
