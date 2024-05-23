const getLocalCart = () => JSON.parse(localStorage.getItem("cart"));

const addtoLocalCart = (item) => {
	const cartItems = getLocalCart();
	let invalidItems = [];
	if (cartItems.find((e) => e._id === item._id)) {
		console.error("Item already exists");
	} else {
		cartItems.push(item);
	}
	localStorage.setItem(JSON.stringify(cartItems));
};

const removeFromLocalCart = (item) => {
	const cartItems = getLocalCart();
	let invalidItems = [];
	if (cartItems.find((e) => e._id === item._id)) {
		cartItems.filter((e) => e._id !== item._id);
	} else {
		console.error("Item not found");
	}
	localStorage.setItem(JSON.stringify(cartItems));
};

export { getLocalCart, removeFromLocalCart, addtoLocalCart };
