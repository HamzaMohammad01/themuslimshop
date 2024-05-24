import React from "react";
import { FaEnvelope, FaLocationDot, FaPhone, FaUser } from "react-icons/fa6";

export default function DetailsCard() {
	return (
		<div className="contactDetails flex flex-col items-center mt-10 md:mt-0">
			<div
				className="card bg-gradient-to-br from-primary to-secondary text-text-0 p-5 md:p-10 md:py-5 text-xl md:text-2xl lg:text-3xl flex flex-col w-full h-full rounded-xl"
				// style={{ borderRadius: "30% 70% 81% 19% / 51% 59% 41% 49% " }}
			>
				<div className="title self-center mb-5 md:mb-7 font-semibold text-4xl md:text-6xl">
					Contact Details
				</div>
				<div className="textContainer mb-3 md:mb-5 font-secondary flex items-center gap-3 md:gap-5">
					<span className={styles.textField}>
						<FaUser />
					</span>
					<span>Hamza Mohammad</span>
				</div>
				<div className="textContainer mb-3 md:mb-5 font-secondary flex items-center gap-3 md:gap-5">
					<span className={styles.textField}>
						<FaLocationDot />
					</span>
					<span className="break-words">
						136, Chaman Ganj Tandan Road Sipri Bazar, Jhansi, 284003
					</span>
				</div>
				<div className="textContainer mb-3 md:mb-5 font-secondary flex items-center gap-3 md:gap-5 break-all">
					<span className={styles.textField}>
						<FaPhone />
					</span>
					<span>+916388910725</span>
				</div>
				<div className="textContainer mb-3 md:mb-5 font-secondary flex items-center gap-3 md:gap-5 break-all">
					<span className={styles.textField}>
						<FaEnvelope />
					</span>
					<span>mohd2010hamza@gmail.com</span>
				</div>
			</div>
		</div>
	);
}

const styles = {
	textField:
		"textField text-primary ml-2 border-2 border-text-0 bg-secondary p-2 md:p-3 rounded-full hover:text-text-0",
};
