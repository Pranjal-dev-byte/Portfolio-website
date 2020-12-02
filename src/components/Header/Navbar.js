import React, {useEffect, useState} from 'react';
import brandSvg from './p.svg';

const Navbar = () => {
    const [state, setState]=useState('initial')
    useEffect(() => {
        function  handleWindowMouseMove(){
            if(window.scrollY>10){
                setState('fixed')
            }
            else{
                setState('initial')
            }
        }
        window.addEventListener('scroll', handleWindowMouseMove);
        return () => window.removeEventListener('scroll', handleWindowMouseMove);
    }, []);
    return (
        <div>
            <nav className={`header__nav header__nav--${state}`}>
                <img src={brandSvg} alt="Brand logo" className="header__nav--svg"/>
                <ul className="header__nav--list">
                    <li className="header__nav--items">Home</li>
                    <li className="header__nav--items">About</li>
                    <li className="header__nav--items">Projects</li>
                </ul>
            </nav>
        </div>     
    )
}

export default Navbar
