import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';

import './header.css'
import Logo from '../../assets/logo.svg' 

export default function CHeader() {
    const [showMenu, setShowMenu] = useState(false)
    return(
        <div className='c-header'>
            <div className='c-header__logo-container'>
                <NavLink to={'/'}>
                    <ReactSVG src={Logo} className='c-header__logo'/>
                </NavLink>
            </div>
            <div className='c-header__menu'>
                {!showMenu && <div className='c-header__menu__container' onClick={() => {setShowMenu(!showMenu)}}>
                    <div className='c-header__menu-icon'></div>
                    <div className='c-header__menu-icon'></div>
                    <div className='c-header__menu-icon'></div>
                </div>}
                {showMenu && <div className='c-header__menu__container' onClick={() => {setShowMenu(!showMenu)}}>
                    <div className='c-header__close-icon-left'></div>
                    <div className='c-header__close-icon-right'></div>

                </div>}
                {showMenu && <div className='c-header__nav__mobile'>
                    <NavLink to={'/'} className='c-header__nav__item'>Inicio</NavLink>
                    <a href="#sobre-nosotros" className='c-header__nav__item'>Sobre nosotros</a>
                    <a href="#estaciones" className='c-header__nav__item'>Estaciones</a>
                    <a href="#contacto" className='c-header__nav__item'>Contacto</a>
                </div>}
            </div>
            <div className='c-header__nav__desktop'>
                    <NavLink to={'/'} className='c-header__nav__item'>Inicio</NavLink>
                    <a href="#sobre-nosotros" className='c-header__nav__item'>Sobre nosotros</a>
                    <a href="#estaciones" className='c-header__nav__item'>Estaciones</a>
                    <a href="#contacto" className='c-header__nav__item'>Contacto</a>
                </div>
        </div>
    )
}