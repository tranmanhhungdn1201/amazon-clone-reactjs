import React from 'react';
import PropTypes from 'prop-types';
import './Subtotal.scss';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../StateProvider';
import './Subtotal.scss';
import { getBasketTotal } from '../../reducer';

Subtotal.propTypes = {
    
};

function Subtotal(props) {
    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                    <p>Subtotal ({basket.length} items): <strong>{`${value}`}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox" name="" id=""/> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Procced to Checkout</button>
        </div>
    );
}

export default Subtotal;