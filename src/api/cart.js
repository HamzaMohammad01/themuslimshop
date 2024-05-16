import apiClient from "./client";

const endpoint = "cart";

//GET get cart items
const getCartItems = async (authToken) =>
	await apiClient.get(
		endpoint,
		{},
		{ headers: { "x-auth-token": authToken } }
	);

// PATCH add cart items
const addToCart = async (authToken, item) => {
	apiClient.patch(
		endpoint + "/add",
		{ item },
		{
			headers: { "x-auth-token": authToken },
		}
	);
};

//PATCH remove cart items
const removeFromCart = async (authToken, item) => {
	await apiClient.patch(
		endpoint + "/delete",
		{ item },
		{
			headers: { "x-auth-token": authToken },
		}
	);
};

export { getCartItems, addToCart, removeFromCart };
