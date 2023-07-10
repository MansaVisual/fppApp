
'use client'
import React, { useEffect } from 'react';

const Menu = () => {

    useEffect(() => {
        
            const menuToggle = document.querySelector('.toggle-menu');
            const nav = document.querySelector('.site-nav .col-36-28')
            const closeButton = document.querySelector('.close-menu');

            menuToggle?.addEventListener('click', () =>{
                menuToggle?.classList.toggle('active');
                nav?.classList.toggle('active');
            });

            closeButton?.addEventListener('click', () =>{
                menuToggle?.classList.remove('active');
                nav?.classList.remove('active');
            });
        
    }, []);

    return(
    <> 
        <nav className="site-nav container">
            <div className="row center top">
                <div className="col-36-5">
                    <div className="logo">
                        <figure className="img-box">
                            <img src="/images/federacionportenadepatin.png" alt="logo" />
                        </figure>
                    </div>
                    <div className="mobile">
                        <button className="toggle-menu">MENU</button>
                    </div>
                </div>

                <div className="col-36-28 offset-left-36-1">
                    <header className='mobile'>
                        <a className='logo-mobile'></a>
                        <button className="close-menu">
                            X
                        </button>
                    </header>
                    <ul className="main-menu">
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                    <menu className="cta-button">
                        <li>
                            <a href="#">PADRÓN</a>
                        </li>
                    </menu>
                </div>
            </div>
        </nav>
    </>

    );

};

export default Menu;