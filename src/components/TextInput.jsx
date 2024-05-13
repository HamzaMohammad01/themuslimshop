import React from "react";

function TextInput({
	label,
	placeholder = "lorem",
	description,
	width = "w-9/12",
	marginTop = "mt-5",
	register,
	errors,
	registerOptions,
	...otherProps
}) {
	return (
		<div className={`${width}`}>
			<input
				className={`h-16 ${width} block border-2 border-primary bg-black rounded-xl ${marginTop} text-text-0 text-3xl px-4`}
				placeholder={placeholder}
				{...register(label, registerOptions)}
				{...otherProps}
			/>
			{errors[label] && (
				<div className="text-red-500">This field is required</div>
			)}
		</div>
	);
}

export default React.forwardRef(TextInput);
