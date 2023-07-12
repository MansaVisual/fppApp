
'use client'
import React, { useEffect } from 'react';

const Menu = () => {

    useEffect(() => {
        
            const openMenu = document.querySelector('.toggle-menu');
            const nav = document.querySelector('.site-nav .col-36-28')
            const closeButton = document.querySelector('.close-menu');

            openMenu?.addEventListener('click', () =>{
                openMenu?.classList.toggle('active');
                nav?.classList.toggle('active');
            });

            closeButton?.addEventListener('click', () =>{
                openMenu?.classList.remove('active');
                nav?.classList.remove('active');
            })
        
    }, []);

    return(
    <> 
        <nav className="site-nav container">
            <div className="row center top">
                <div className="col-36-5 row middle between">
                    <div className="logo">
                        <figure className="img-box">
                            <img src="/images/federacionportenadepatin.png" alt="logo" />
                        </figure>
                    </div>
                    <div className="mobile col-auto middle row no-pad-left no-pad-right">
                        <button className="toggle-menu icon-menu1"></button>
                    </div>
                </div>

                <div className="col-36-28 offset-left-36-1">
                    <header className='mobile row between middle'>
                        <a className='logo-mobile'>
                            <figure className="img-box">
                                <img src="/images/federacionportenadepatin.png" alt="logo" />
                            </figure>
                        </a>
                        <button className="close-menu icon-clear"></button>
                    </header>
                    <ul className="main-menu">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">institucional</a>
                        </li>
                        <li>
                            <a href="#">deportes</a>
                        </li>
                        <li>
                            <a href="#">contacto</a>
                        </li>
                    </ul>
                    <menu className="cta-button no-mobile">
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