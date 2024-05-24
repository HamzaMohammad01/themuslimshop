import apiClient from "./client";

const endpoint = "/cart/localCart";

const getLocalCart = () => {
	let cartItems = JSON.parse(localStorage.getItem("cart"));
	if (!cartItems) {
		localStorage.setItem("cart", JSON.stringify([]));
	}
	return apiClient.post(endpoint, {
		items: JSON.parse(localStorage.getItem("cart")),
	});
};

const addtoLocalCart = (item) => {
	let cartItems = JSON.parse(localStorage.getItem("cart"));
	if (cartItems.find((e) => e._id === item._id)) {
		console.error("Item already exists");
	} else {
		cartItems.push(item);
	}
	localStorage.setItem("cart", JSON.stringify(cartItems));
};

const removeFromLocalCart = (item) => {
	let cartItems = getLocalCart();
	if (cartItems.find((e) => e._id === item._id)) {
		cartItems = cartItems.filter((e) => e._id !== item._id);
	} else {
		console.error("Item not found");
	}
	localStorage.setItem("cart", JSON.stringify(cartItems));
};

export { getLocalCart, removeFromLocalCart, addtoLocalCart };
