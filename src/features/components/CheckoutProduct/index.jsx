import React from 'react';
import PropTypes from 'prop-types';
import StarRate from '@material-ui/icons/StarRate';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.scss';

CheckoutProduct.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
};

CheckoutProduct.defaultProps = {
    id: '',
    title: '',
    image:  '',
    price: 0,
    rating: 0,
};

function CheckoutProduct(props) {
    const { id, title, image, price, rating } = props
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                ...props
            }
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title}/>
            <div className="checkoutProduct__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) =>(
                            <p><StarRate /></p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;