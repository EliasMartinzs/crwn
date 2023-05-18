import { useContext } from 'react';

import './ProductCard.scss';
import { CartContext } from '../../context/cart.context';
import Button from '../Button/Button';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const addProductToCard = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCard}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
