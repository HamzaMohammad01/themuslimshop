import React from "react";
import Button from "./Button";
import { removeFromCart } from "../api/cart";
import { useNavigate } from "react-router-dom";
import showToast from "../components/showToast";

export default function RemoveFromCartButton({ cb, item, ...otherProps }) {
	const navigate = useNavigate();
	let token = localStorage.getItem("token");
	return (
		<Button
			text={"Remove from Cart"}
			color={"!bg-red-600"}
			{...otherProps}
			onClick={async () => {
				await removeFromCart(token, item);
				cb();
				showToast("Removed from Cart", "rmCart");
				// navigate("/orders");
			}}
		/>
	);
}
