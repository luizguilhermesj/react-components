import './menu.scss';

import React from 'react';

const Menu = props => {
    return (
        <div className="menu">
            <svg className="image" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 14" style={{enableBackground: "new 0 0 120 14"}} xmlSpace="preserve">
<rect x="47.4" y="0.2" className="st0" width="2.6" height="13.6"></rect>
<rect x="101.9" y="0.2" className="st0" width="2.6" height="13.6"></rect>
<polygon className="st0" points="0.2,0.2 0.2,1.1 4.1,1.1 4.1,13.8 6.7,13.8 6.7,1.1 10.7,1.1 10.7,0.2 "></polygon>
<polygon className="st0" points="23.7,6.5 16.7,6.5 16.7,0.2 14.1,0.2 14.1,13.8 16.7,13.8 16.7,7.5 23.7,7.5 23.7,13.8 26.2,13.8
         26.2,0.2 23.7,0.2 "></polygon>
<polygon className="st0" points="33.1,7.5 38.3,7.5 38.3,6.5 33.1,6.5 33.1,1.1 40,1.1 40,0.2 30.6,0.2 30.6,13.8 40,13.8 40,12.9
         33.1,12.9 "></polygon>
<path className="st0" d="M75.5,0c-4.2,0-7,3-7,7c0,4,2.8,7,7,7c4.2,0,7-3,7-7C82.5,3,79.7,0,75.5,0 M76.8,12.7c-0.2,0.1-0.7,0.2-1.3,0.2
         c-0.6,0-1.1-0.2-1.3-0.2c-1.4-0.5-2.9-2.1-2.9-5.7c0-3.6,1.5-5.1,3-5.7c0.2-0.1,0.7-0.2,1.3-0.2c0.6,0,1.1,0.2,1.3,0.2
         c1.4,0.5,2.9,2.1,2.9,5.7C79.8,10.6,78.2,12.1,76.8,12.7"></path>
<path className="st0" d="M65.9,12.1c-1.2,1.2-3,1.9-5,1.9c-4.2,0-7.1-2.3-7.1-7c0-4,2.9-7,7.1-7c2,0,3.7,0.7,4.9,1.8l-0.8,1.6
         c-0.8-1.4-2.2-2.3-3.8-2.3c-2.8,0-4.7,2.5-4.7,5.9c0,4,2.2,5.9,4.7,5.9c1.8,0,3.3-0.7,4.3-1.6L65.9,12.1z"></path>
<path className="st0" d="M120.2,12.1c-1.2,1.2-3,1.9-5,1.9c-4.2,0-7.1-2.3-7.1-7c0-4,2.9-7,7.1-7c2,0,3.7,0.7,4.9,1.8l-0.8,1.6
         c-0.8-1.4-2.2-2.3-3.8-2.3c-2.8,0-4.7,2.5-4.7,5.9c0,4,2.2,5.9,4.7,5.9c1.8,0,3.3-0.7,4.3-1.6L120.2,12.1z"></path>
<polygon className="st1" points="97.3,0.2 97.3,13.8 95.7,13.8 86.7,3.4 86.7,3.4 86.7,13.8 85.6,13.8 85.6,0.2 87.5,0.2 96.2,10.6
         96.3,10.6 96.3,0.2 "></polygon>
</svg>
            <div className="menu__items">
                <MenuItem>Clothing</MenuItem>
                <MenuItem>Shoes</MenuItem>
                <MenuItem>Accessories</MenuItem>
                <MenuItem>Kids</MenuItem>
                <MenuItem>Brands</MenuItem>
                <MenuItem>Sport</MenuItem>
                <MenuItem>Designer</MenuItem>
                <MenuItem>Edition</MenuItem>
            </div>
        </div>
    );
};

const MenuItem = props => {
    return (
        <div className="menu__item">{props.children}</div>
    );
};

export default Menu;
