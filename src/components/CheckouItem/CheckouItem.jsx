import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './Checkout.scss';

const CheckouItem = ({ cartItem }) => {
  const { deleteItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const deleteItemHandler = () => deleteItemToCart(cartItem);
  const addItemCart = () => addItemToCart(cartItem);
  const removeItemCart = () => removeItemToCart(cartItem);

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="arrow" onClick={removeItemCart}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={addItemCart}>
        &#10095;
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteItemHandler}>
        &#x78;
      </div>
    </div>
  );
};

export default CheckouItem;
