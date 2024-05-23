import React from "react";

export default function Title({ otherStyles, onPress }) {
	return (
		<div
			className={`text-primary text-5xl font-primary flex justify-center xs:text-2xl ${otherStyles}`}
		>
			The Muslim Shop
		</div>
	);
}
