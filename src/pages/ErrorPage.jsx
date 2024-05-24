import React from "react";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function ErrorPage() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate("/");
	};
	return (
		<>
			<Title />
			<div className="flex flex-col h-[90svh] text-primary px-4 sm:px-6 lg:px-20 mx-auto max-w-screen-xl items-center justify-center text-center">
				<div
					className="text-9xl shadow-2xl h-min w-min"
					style={{
						filter: "drop-shadow(0px 0px 0.75rem #83ca44)",
					}}
				>
					{state ? state : "500"}
				</div>
				<div className="font-secondary text-text-0 text-2xl mt-5">
					{state === 404
						? "Sorry! We searched high and low but cannot find your page."
						: state === 403
						? "Access Forbidden"
						: "We ask for your sincerest apologies. Something unexpected has occurred."}
				</div>
				<Button
					text="Go to Home"
					otherStyles={"mt-5"}
					onClick={handleOnClick}
				/>
			</div>
			<Footer />
		</>
	);
}
