import apiClient from "./client";

const endpoint = "home";

//POST get cart items
const getHomeItems = async () => await apiClient.get(endpoint);

// PATCH add cart items
const addToHome = async (category, item, authToken) => {
	apiClient.patch(
		endpoint + "/add",
		{ category, item },
		{
			headers: { "x-auth-token": authToken },
		}
	);
};

//PATCH remove cart items
const removeFromHome = async (category, item, authToken) => {
	apiClient.patch(
		endpoint + "/delete",
		{ category, item },
		{
			headers: { "x-auth-token": authToken },
		}
	);
};

export { getHomeItems, addToHome, removeFromHome };
