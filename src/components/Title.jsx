import React from "react";
import { useNavigate } from "react-router-dom";

export default function Title({ otherStyles, onPress }) {
	return (
		<div
			className={`text-primary text-5xl font-primary flex justify-center ${otherStyles}`}
		>
			The Muslim Shop
		</div>
	);
}
