import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import './CartDropdown.scss';
import { CartContext } from '../../context/cart.context';

import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout');
  };

  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
