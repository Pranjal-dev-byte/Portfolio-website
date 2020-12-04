import React, {useEffect, useState} from 'react';
import brandSvg from './img/p.svg';
import '../../sass/layout/_header.scss'
import linkedIn from './img/linked.svg'
import git from './img/github.svg'
import insta  from './img/insta.svg'  


const Header = () => {
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
            <div className="header">
            <nav 
                className={`header__nav ${state!=='fixed'?"header__nav--initial":"header__nav--fixed"}`}
            >
                <img src={brandSvg} alt="Brand logo" className="header__nav--svg"/>
                <ul className="header__nav--list">
                    <li className="header__nav--items">Home</li>
                    <li className="header__nav--items">About</li>
                    <li className="header__nav--items">Projects</li>
                </ul>
            </nav>
                <div className={`header__content ${state==='fixed'?'padding-offset':''}`}>
                <h1 class="heading__primary">
                    <div id="animateName">
                        <span class="heading__primary--main">Pranjal Misra</span>
                    </div> 
                    <span class="heading__primary--sub">Software Engineer</span>
            <div class="heading__primary--icons"id="animateSocial" >
                <span class="heading__primary--icon">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/PranjalMisra12">
                        <img src={linkedIn} alt="LinkedIn Profile" />
                    </a>
                </span>
                <span class="heading__primary--icon">
                    <a  target="_blank" rel="noreferrer" href="https://github.com/Pranjal-dev-byte">
                        <img src={git} alt="LinkedIn Profile"/>
                    </a>
                </span>
                <span class="heading__primary--icon">
                    <a  target="_blank" rel="noreferrer" href="https://www.instagram.com/misra_pranjal_">
                        <img src={insta} alt="LinkedIn Profile" />
                    </a>
                </span>
            </div>
            <button class="btn btn-resume u-margin-medium-top" id="animateSocial">
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1nCODWuXSJ7XEsrvIuGeJsmMMitustSSa/view?usp=sharing" class="header__resume">Resume</a> 
            </button>
                </h1>
                </div>
            </div>
        </div>    
    )
}

export default Header
