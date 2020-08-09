import React from 'react';
import PropTypes from 'prop-types';
import banner from '../../assets/img/banner.jpg';
import './Banner.scss';

Banner.propTypes = {
    
};

function Banner(props) {
    return (
        <div className="banner">
            <img
                className="banner__image"
                src={banner}
                alt="banner"
            />
        </div>
    );
}

export default Banner;