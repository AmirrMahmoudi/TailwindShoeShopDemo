// import CartItem from "./CartItem";

import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2 className="mb-5 text-4xl font-bold">Cart</h2>
      {/* <CartItem item={SHOE_LIST[0]} />
      <CartItem item={SHOE_LIST[2]} />
      <CartItem item={SHOE_LIST[3]} />
      <CartItem item={SHOE_LIST[3]} />
      <CartItem item={SHOE_LIST[3]} />
      <CartItem item={SHOE_LIST[3]} /> */}
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
