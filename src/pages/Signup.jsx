import React from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaKey, FaUser, FaUserPlus } from "react-icons/fa6";
import { registerNewUser } from "../api/users.js";
import { useNavigate } from "react-router-dom";

function Signup({ history }) {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		const response = await registerNewUser(data, (progress) =>
			console.log(progress)
		);
		localStorage.setItem("token", response.headers["x-auth-token"]);
		if (response && response.status === 400) {
			return setError("email", {
				type: "validation",
				message: response.data,
			});
		}
		navigate("/");
	};
	return (
		<>
			<Navbar />

			<div className="bg-black dark:bg-black text-lg text-primary px-10 ml-20 items-center h-svh grid grid-cols-2">
				<div className="textContainer text-7xl text-primary flex flex-col items-center justify-center font-secondary mb-2">
					<FaUser
						className="size-1/2"
						style={{
							filter: "drop-shadow(0px 0px 0.75rem #83ca44)",
						}}
					/>
					<div
						className="text1 mt-10 mr-1 shadow-primary"
						style={{
							filter: "drop-shadow(0px 0px 0.75rem #83ca44)",
						}}
					>
						Register.
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full flex flex-col "
					method="POST"
					encType="multipart/form-data"
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
						label="password"
						icon={<FaKey className="text-text-0 text-2xl" />}
						registerOptions={{ required: true }}
						register={register}
						errors={errors}
					/>

					<div className="buttonContainer flex items-center justify-center w-fit mt-5 text-3xl text-text-0 px-4 h-16 bg-primary rounded-2xl self-center">
						<FaUserPlus className="text-text-0 text-2xl mr-4" />
						<input
							type="submit"
							value={"Register"}
							className={`bg-primary w-max rounded-xl cursor-pointer flex `}
						/>
					</div>
				</form>
			</div>
		</>
	);
}

export default Signup;
