import React from "react";

export default function Button({
	fontSize = "text-3xl",
	onPress,
	text = "Lorem",
	otherStyles,
}) {
	return (
		<div
			className={`bg-primary w-max px-5 rounded-xl cursor-pointer flex ${fontSize} ${otherStyles}`}
			onClick={onPress}
		>
			<div className="text-text-0 font-semibold">{text}</div>
		</div>
	);
}
