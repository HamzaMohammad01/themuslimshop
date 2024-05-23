import React, { useState } from "react";

import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import { login } from "../api/auth.js";
import Spinner from "../components/Spinner.jsx";

import { useForm } from "react-hook-form";
import { FaEnvelope, FaKey, FaRightToBracket } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {
	const schema = yup.object().shape({
		email: yup
			.string()
			.email("Invalid email format")
			.required("Email is required"),
		password: yup.string().required("Password is required"),
	});

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const navigate = useNavigate();
	const [progress, setProgress] = useState(0);

	const onSubmit = async (data) => {
		try {
			const response = await login(data, (progress) => {
				console.log(progress);
				setProgress(progress);
			});
			if (response && response.status === 400) {
				setError("email", {
					type: "manual",
					message: response.data,
				});
			} else {
				localStorage.setItem("token", response.data);
				navigate("/account");
			}
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	return !(progress > 0 && progress < 1) ? (
		<>
			<Navbar />

			<div className="text-lg text-primary px-4 sm:px-6 lg:px-20 mx-auto max-w-screen-xl h-screen flex flex-col lg:flex-row items-center justify-center xs:justify-start ml-20 xs:ml-0 xs:mt-5">
				<div className="textContainer text-primary flex flex-col items-center justify-center font-secondary mb-10 xs:mb-5 lg:mb-0 lg:mr-10">
					<MdLockOutline
						className="text-9xl lg:w-[50vmin] lg:h-auto"
						style={{
							filter: "drop-shadow(0px 0px 0.75rem #83ca44)",
						}}
					/>
					<div
						className="text-5xl sm:text-6xl mt-4 shadow-primary"
						style={{
							filter: "drop-shadow(0px 0px 0.75rem #83ca44)",
						}}
					>
						Login.
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full max-w-lg flex flex-col space-y-6"
					method="POST"
					encType="multipart/form-data"
				>
					<TextInput
						width="w-full"
						placeholder="Email"
						label="email"
						type="email"
						icon={<FaEnvelope className="text-text-0 text-2xl" />}
						register={register}
						errors={errors}
						registerOptions={{ required: true }}
					/>
					<TextInput
						width="w-full"
						placeholder="Password"
						type="password"
						label="password"
						icon={<FaKey className="text-text-0 text-2xl" />}
						register={register}
						errors={errors}
						registerOptions={{ required: true }}
					/>

					<div className="flex items-center justify-center mt-5">
						<button
							type="submit"
							className="flex items-center text-2xl text-text-0 px-4 py-2 bg-primary rounded-2xl"
						>
							<FaRightToBracket className="text-text-0 text-xl mr-2" />
							Login
						</button>
					</div>
				</form>
				<div className="mt-7 text-text-0 text-xl font-secondary mx-auto lg:absolute lg:bottom-5 lg:right-1/3 text-center">
					<span>Don’t have an account yet? </span>
					<span
						className="text-primary cursor-pointer"
						onClick={() => navigate("/signup")}
					>
						Create New Account
					</span>
				</div>
			</div>
		</>
	) : (
		<Spinner />
	);
}

export default Login;
