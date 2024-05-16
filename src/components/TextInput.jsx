import React from "react";

function TextInput({
	label,
	placeholder = "lorem",
	description,
	width = "w-9/12",
	marginTop = "mt-5",
	icon,
	register,
	errors,
	registerOptions,
	...otherProps
}) {
	return !description ? (
		<div className={``}>
			<div
				className={`${width} flex items-center justify-center ${width} ${marginTop} border-2 border-primary rounded-2xl`}
			>
				<div className="bg-primary h-16 rounded-xl flex border-0  items-center justify-center w-16">
					{icon}
				</div>
				<input
					className={`h-16 ${width} block bg-black  text-text-0 text-3xl px-4 focus:outline-none rounded-2xl`}
					placeholder={placeholder}
					{...register(label, registerOptions)}
					{...otherProps}
				/>
			</div>
			{errors[label] && (
				<div className="text-red-500">This field is required</div>
			)}
		</div>
	) : (
		<div className={``}>
			<div
				className={`${width} flex items-center justify-center ${width} ${marginTop} border-2 border-primary rounded-2xl`}
			>
				<div className="bg-primary h-16 rounded-xl flex border-0  items-center justify-center w-16">
					{icon}
				</div>
				<textarea
					className={`h-16 ${width} block bg-black  text-text-0 text-3xl px-4 focus:outline-none rounded-2xl`}
					placeholder={placeholder}
					{...register(label, registerOptions)}
					{...otherProps}
				/>
			</div>
			{errors[label] && (
				<div className="text-red-500">This field is required</div>
			)}
		</div>
	);
}

export default TextInput;
