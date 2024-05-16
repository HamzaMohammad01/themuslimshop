import React from "react";

export default function Button({
	fontSize = "text-3xl",
	onClick,
	text = "Lorem",
	otherStyles,
	...otherProps
}) {
	return (
		<div
			className={`bg-primary w-max px-5 py-1 rounded-full cursor-pointer flex ${fontSize} ${otherStyles}`}
			onClick={onClick}
			{...otherProps}
		>
			<div className="text-text-0 font-semibold">{text}</div>
		</div>
	);
}
