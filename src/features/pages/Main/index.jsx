import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Headers';
import Banner from '../../../components/Banner';
import Product from '../../components/Product';
import './MainPage.scss';

MainPage.propTypes = {
    
};

function MainPage(props) {
    return (
        <>
            <Header />
            <div className="home">
                <Banner />
                <div className="home__row">
                    <Product
                        id="1"
                        title="Logitech MK270 Wireless Keyboard and Mouse Combo - Keyboard and Mouse Included, 2.4GHz Dropout-Free Connection, Long Battery Life (Frustration-Free Packaging)"
                        price={1196}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81YtozY6oRL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="2"
                        title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics"
                        price={349.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                    />
                   
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title="[2020] AORUS 5 (MB) Gaming Laptop, 15.6-inch FHD 144Hz IPS, GeForce GTX 1650 Ti, 10th Gen Intel i7-10750H, 16GB DDR4, 512GB NVMe SSD"
                        price={1299.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/91vCOaLxktL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="4"
                        title="ROG Zephyrus M Thin and Portable Gaming Laptop, 15.6” 240Hz FHD IPS, NVIDIA GeForce RTX 2070, Intel Core i7-9W-AH76"
                        price={1989}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81mHL0psH-L._AC_SL1500_.jpg"
                    />
                    <Product
                        id="5"
                        title="[2020] Gigabyte AERO 15 OLED KB Thin+Light High Performance Laptop, 15.6 4K UHD OLED Display w/ 100% DCI-P3, GeForce RTX 2060, i7-1rs Battery Life"
                        price={2099}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51YKfgetufL._AC_SL1000_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6"
                        title="CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready & Win 10 Home (GXiVR8060A8, Black)"
                        price={749.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71fVpfx5oiL._AC_SL1500_.jpg"
                    />
                </div>
            </div>
        </>
    );
}

export default MainPage;