const Footer = () =>{
    return (
        <footer className="container site-footer">
            <div className="row middle">
                <div className="col-36-17 offset-left-36-1">
                    <figure className="img-box">
                        <img src="/images/logos-tanda1.png" alt="logo" />
                    </figure>
                </div>
                <div className="col-logos col-36-17 offset-left-36-1">
                    <figure className="img-box">
                        <img src="/images/logos-tanda2.png" alt="logo" />
                    </figure>
                </div>
                <section className="info col-36-15 offset-left-36-11">
                    <ul className="social-media">
                        <li>
                            <a href="#" className="icon-facebook2"></a>
                        </li>
                        <li>
                            <a href="#" className="icon-instagram"></a>
                        </li>
                        <li>
                            <a href="#" className="icon-twitter"></a>
                        </li>
                    </ul>
                    <address>
                        <p>Av. del Libertador 8620, C1429 - C.A.B.A. - ARGENTINA</p>
                        <p>TELÉFONO (+54) 11 5591-1077 //  SECRETARIAFPP@GMAIL.COM</p>
                    </address>
                </section>
            </div>
        </footer>
    )
}

export default Footer