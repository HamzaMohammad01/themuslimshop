import React from "react";
import { useNavigate } from "react-router-dom";

export default function Title({ otherStyles, onPress }) {
	const navigate = useNavigate();
	const handleOnClick = () => navigate("/");
	return (
		<div
			className={`text-primary text-5xl font-primary flex justify-center xs:text-2xl cursor-pointer ${otherStyles}`}
			onClick={handleOnClick}
		>
			The Muslim Shop
		</div>
	);
}
