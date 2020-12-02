import React from 'react';
import Navbar from './Navbar';
import '../../sass/layout/_header.scss'


const Header = () => {
    return (
        <div>
            <div className="header">
                <Navbar/>
            </div>
        </div>
    )
}

export default Header
