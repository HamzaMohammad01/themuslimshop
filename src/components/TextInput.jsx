import React, { useState } from "react";
import { PiEyeClosedBold, PiEye } from "react-icons/pi";

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
	type = "text",
	...otherProps
}) {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return !description ? (
		<div className={``}>
			<div
				className={`${width} flex items-center justify-center ${width} ${marginTop} border-2 border-primary rounded-2xl`}
			>
				{icon && (
					<div className="bg-primary h-16 rounded-xl flex border-0  items-center justify-center w-16">
						{icon}
					</div>
				)}
				<input
					className={`h-16 ${width} block bg-black  text-text-0 text-3xl px-4 focus:outline-none rounded-2xl`}
					placeholder={placeholder}
					type={showPassword ? "text" : type}
					{...register(label, registerOptions)}
					{...otherProps}
				/>
				{type === "password" && (
					<div
						className="text-primary text-4xl mr-5 cursor-pointer"
						onClick={togglePasswordVisibility}
					>
						{showPassword ? <PiEye /> : <PiEyeClosedBold />}
					</div>
				)}
			</div>
			{errors[label] && (
				<div className="text-red-500">{errors[label].message}</div>
			)}
		</div>
	) : (
		<div className={``}>
			<div
				className={`${width} flex ${width} ${marginTop} border-2 border-primary rounded-2xl h-56 xs:h-36`}
			>
				<textarea
					className={`${width} block bg-black py-2 text-text-0 text-3xl px-4 focus:outline-none rounded-2xl`}
					placeholder={placeholder}
					{...register(label, registerOptions)}
					{...otherProps}
				/>
			</div>
			{errors[label] && (
				<div className="text-red-500">{errors[label].message}</div>
			)}
		</div>
	);
}

export default TextInput;
