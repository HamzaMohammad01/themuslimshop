import { loadStripe } from "@stripe/stripe-js";
import apiClient from "./client";

const endpoint = "/create-checkout-session";

const makePayment = async (items) => {
	let stripe = await loadStripe(
		"pk_test_51PH3tkSJ7hzDPEQeXzWEmDhBYzFkn6se2YLW84xMNwzOjI9t8gK6pAVpiqjadN5cEKXJ0WctQ77DrsNakTiJjqmz00j8N8AuMU"
	);

	try {
		const session = await apiClient.post(endpoint, { items });
		const result = await stripe.redirectToCheckout({
			sessionId: session.data.id,
		});
		if (result.error) {
			console.error(result.error.message);
		}
	} catch (error) {
		console.error("Error creating checkout session:", error);
	}
};

export default makePayment;
