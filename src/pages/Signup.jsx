import React, { useState } from "react";

import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import Spinner from "../components/Spinner.jsx";
import { registerNewUser } from "../api/users.js";

import { useForm } from "react-hook-form";
import { FaEnvelope, FaKey, FaUser, FaUserPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Title from "../components/Title";
import Footer from "../components/Footer";

function Signup() {
	const schema = yup.object().shape({
		name: yup
			.string()
			.min(3, "Name should be minimum of 3 characters")
			.max(50, "Name can be maximum of 50 characters")
			.required("Name is required"),
		email: yup
			.string()
			.email("Invalid email format")
			.required("Email is required"),
		password: yup
			.string()
			.min(8, "Password should be minimum of 8 characters")
			.matches(
				/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
				"Password must contain at least one uppercase letter, one lowercase letter, and one number"
			)
			.required("Password is required"),
	});

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [progress, setProgress] = useState(0);

	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			const response = await registerNewUser(data, (progress) =>
				setProgress(progress)
			);
			localStorage.setItem("token", response.headers["x-auth-token"]);
			if (response && response.status === 400) {
				setError("email", {
					type: "manual",
					message: response.data,
				});
			} else {
				navigate("/");
			}
		} catch (error) {
			console.error("Registration failed:", error);
		}
	};

	return !(progress > 0 && progress < 1) ? (
		<>
			<Title />
			<Navbar />
			<div className="px-4 sm:px-6 lg:px-20 mx-auto max-w-screen-xl h-screen flex flex-col items-center justify-center xs:justify-start ml-20 xs:ml-0 xs:mt-5">
				<div className="textContainer text-primary flex flex-col items-center justify-center font-secondary mb-10">
					<FaUser
						className="text-9xl"
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
						Register.
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full max-w-lg flex flex-col space-y-6 xs:space-y-2"
					method="POST"
				>
					<TextInput
						width="w-full"
						placeholder="Name"
						marginTop="mt-0"
						label="name"
						icon={<FaUser className="text-text-0 text-2xl" />}
						registerOptions={{ required: true }}
						register={register}
						errors={errors}
					/>
					<TextInput
						width="w-full"
						placeholder="Email"
						label="email"
						icon={<FaEnvelope className="text-text-0 text-2xl" />}
						registerOptions={{ required: true }}
						register={register}
						errors={errors}
					/>
					<TextInput
						width="w-full"
						placeholder="Password"
						type="password"
						label="password"
						icon={<FaKey className="text-text-0 text-2xl" />}
						registerOptions={{ required: true }}
						register={register}
						errors={errors}
					/>
					<div className="buttonContainer flex items-center justify-center w-fit xs:!mt-3 text-3xl text-text-0 px-4 h-16 bg-primary rounded-2xl self-center">
						<FaUserPlus className="text-text-0 text-2xl mr-4" />
						<input
							type="submit"
							value={"Send"}
							className="bg-primary w-max rounded-xl cursor-pointer flex"
						/>
					</div>
				</form>
			</div>
			<Footer />
		</>
	) : (
		<Spinner />
	);
}

export default Signup;
