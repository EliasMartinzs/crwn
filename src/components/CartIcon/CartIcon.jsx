import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import ShoppingIcon from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={ShoppingIcon} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
