import React from 'react';
import brandSvg from './p.svg';
import '../../sass/layout/_navbar.scss'

const header = () => {
    return (
        <div>
            <navbar className="header__nav">
                <img src={brandSvg} alt="Brand logo" className="header__nav--svg"/>
                <ul className="header__nav--list">
                    <li className="header__nav--items">Home</li>
                    <li className="header__nav--items">About</li>
                    <li className="header__nav--items">Projects</li>
                </ul>
            </navbar> 
            
        </div>
    )
}

export default header
