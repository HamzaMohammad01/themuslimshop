import React from "react";

export default function Search({
	label,
	placeholder = "lorem",
	description,
	width = "w-9/12",
	marginTop = "mt-5",
	icon,
	otherStyles,
	...otherProps
}) {
	return (
		<div className={otherStyles}>
			<div
				className={`${width} flex items-center justify-center ${width} ${marginTop} border-2 border-primary rounded-2xl`}
			>
				<div className="bg-primary h-16 rounded-xl flex border-0  items-center justify-center w-16">
					{icon}
				</div>
				<input
					className={`h-16 ${width} block bg-black  text-text-0 text-3xl px-4 focus:outline-none rounded-2xl`}
					placeholder={placeholder}
					{...otherProps}
				/>
			</div>
		</div>
	);
}
