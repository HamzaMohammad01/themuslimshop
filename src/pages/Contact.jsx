import React from "react";
import { useForm } from "react-hook-form";

import TextInput from "../components/TextInput";
import Navbar from "../components/Navbar";
import { FaEnvelope, FaGlobe, FaPaperPlane, FaUser } from "react-icons/fa6";
import DetailsCard from "../components/DetailsCard";

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = () => console.log("Submitted");

	return (
		<>
			<Navbar />

			<div className="container mx-auto px-4 py-5 text-primary ml-28 xs:ml-0">
				<div className="textContainer text-center md:text-left text-5xl md:text-7xl text-text-0 mt-10 mb-10 xs:mt-2 xs:mb-2 font-secondary">
					<span className="text1 mr-2">Get In</span>
					<span className="text1 text-primary md:text-8xl">
						Touch
					</span>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="w-full flex flex-col space-y-4 xs:space-y-0"
						method="POST"
						encType="multipart/form-data"
					>
						<TextInput
							width="w-full"
							placeholder="Name"
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
							icon={
								<FaEnvelope className="text-text-0 text-2xl" />
							}
							registerOptions={{ required: true }}
							register={register}
							errors={errors}
						/>
						<TextInput
							width="w-full"
							placeholder="Subject"
							label="subject"
							icon={<FaGlobe className="text-text-0 text-2xl" />}
							registerOptions={{ required: true }}
							register={register}
							errors={errors}
						/>
						<TextInput
							width="w-full"
							description
							placeholder="Description"
							label="description"
							icon={<FaGlobe className="text-text-0 text-2xl" />}
							registerOptions={{ required: true }}
							register={register}
							errors={errors}
						/>

						<div className="buttonContainer flex items-center justify-center w-fit xs:!mt-3 text-3xl text-text-0 px-4 h-16 bg-primary rounded-2xl self-center">
							<FaPaperPlane className="text-text-0 text-2xl mr-4" />
							<input
								type="submit"
								value={"Send"}
								className="bg-primary w-max rounded-xl cursor-pointer flex"
							/>
						</div>
					</form>
					<DetailsCard />
				</div>
			</div>
		</>
	);
}
