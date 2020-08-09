import React from 'react';
import PropTypes from 'prop-types';
import { useStateValue } from '../../StateProvider';
import './Checkout.scss';
import CheckoutProduct from '../../components/CheckoutProduct';
import Subtotal from '../../components/Subtotal';

Checkout.propTypes = {
    
};

function Checkout(props) {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/amazon-advertising-2019-guide-760x400.png"
                    alt="ad"
                />
                { basket.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To by one or more basket
                            "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                {...item}
                            />
                        ))}
                    </div>
                )}
            </div>
            {/* {basket.length > 0 && ( */}
                <div className="checkout__right">
                    <Subtotal />
                </div>
            {/* )} */}
        </div>
    );
}

export default Checkout;