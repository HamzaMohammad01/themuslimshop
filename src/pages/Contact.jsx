import React from "react";
import Title from "../components/Title";

import telephone from "../img/telephone_receiver.png";
import lock from "../img/lock.png";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Contact() {
	return (
		<>
			<Navbar />

			<div className="screen bg-black dark:bg-black text-lg flex flex-col text-primary px-10 ml-20 items-center">
				<div className="page h-svh flex flex-col items-center">
					<div className="grid grid-cols-2  justify-center">
						<div className="form flex flex-col">
							<div className="textContainer  text-7xl text-text-0 mt-10 items-baseline font-secondary mb-10">
								<div className="text1 mr-1">Get In</div>
								<div className="text1 text-primary text-8xl">
									Touch
								</div>
							</div>
							<form className="flex flex-col">
								<TextInput placeholder="Email" />
								<TextInput placeholder="Name" />
								<TextInput placeholder="Subject" />
								<TextInput
									placeholder="Description "
									description
								/>
								<Button
									text="Submit"
									otherStyles={"py-2 px-4 border-2 "}
								/>
							</form>
						</div>
						<div className="contactDetails flex-col flex items-center ">
							<img
								src={telephone}
								alt=""
								className="w-max rounded-xl"
							/>
							<div className="card bg-primary text-text-0 rounded-xl p-10 text-4xl  flex flex-col w-full h-full text-wrap">
								<div className="title self-center mb-7 font-semibold text-6xl">
									Contact Details
								</div>
								<div className={styles.textContainer}>
									<span className={styles.textField}>
										Name
									</span>
									<span> - Hamza Mohammad</span>
								</div>
								<div className={styles.textContainer}>
									<span className={styles.textField}>
										Postal Address
									</span>
									<span>
										- 136, Chaman Ganj Tandan Road Sipri
										Bazar, Jhansi, 284003
									</span>
								</div>
								<div className={styles.textContainer}>
									<span className={styles.textField}>
										Mobile Number
									</span>
									<span> - +916388910725</span>
								</div>
								<div className={styles.textContainer}>
									<span className={styles.textField}>
										Email
									</span>
									<span> - mohd2010hamza@gmail.com</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const styles = {
	textContainer: "mb-5 font-secondary text-wrap",
	textField: "text-secondary",
};
