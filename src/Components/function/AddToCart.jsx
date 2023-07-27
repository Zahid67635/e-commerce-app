import { toast } from "react-hot-toast";

let cartItems = []
const cartProduct = (item) => {
    const existingData = localStorage.getItem('myCart');
    if (existingData) {
        cartItems = JSON.parse(existingData);
    }
    cartItems.push(item)
    localStorage.setItem('myCart', JSON.stringify(cartItems));
    toast.success('Item added to cart!')
}
export default cartProduct;