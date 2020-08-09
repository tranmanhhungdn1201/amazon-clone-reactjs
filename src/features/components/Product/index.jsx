import React from 'react';
import PropTypes from 'prop-types';
import StarRate from '@material-ui/icons/StarRate';
import './Product.scss';
import { useStateValue } from '../../StateProvider';

Product.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
};

Product.defaultProps = {
    id: '',
    title: '',
    image:  '',
    price: 0,
    rating: 0,
};

function Product(props) {
    const { id, title, image, price, rating } = props
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                ...props
            }
        })
    }

    return (
        <div className="product">
            <div className="produc__info">
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
            </div>
            <img
                src={image}
                alt={title}
            />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;