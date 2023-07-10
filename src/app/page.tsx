'use client'
import api from "@/api"
import Head from 'next/head';
import '../../styles/libraries/grid.css'
import '../../styles/libraries/reset.css'
import '../../styles/main.css'
import '../../styles/globals.css'
import Menu from '../components/menu';



export default async function Home() {
  const links = await api.links.fetch();
  
  return <>
          <Head>
            {/* <script src="/js/site-nav.js" /> */}
          </Head>
          <div id="wrapper">
            {/* image header */}
            <section className="image-header container no-mobile">
              <div className="row full-width">
                <div className="col-36-36">
                  <figure className="img-box">
                    <img src="/images/background-header.jpg" alt="image header" />
                  </figure>
                </div>
              </div>
            </section>
            {/* image header */}

            {/* header  */}
              <header>
                <Menu/>
              </header>
            {/* header  */}

            {/* image start main */}
            <section className="image-main container">
              <div className="row">
                <div className="col-36-34 offset-left-36-1">
                  <figure className="img-box">
                    <img src="/images/background-bajadas.png" alt="logo" />
                  </figure>
                </div>
              </div>
            </section>
            {/* image start main */}

            {/* main */}
              <main className="content-main container">
                <div className="row">
                  <div className="col-36-34 offset-left-36-1"> 
                    <ul className="dowloads-menu">
                      {links.map((link) => (
                        <li key={link.url}>
                          <a href={link.url}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </main>
            {/* main */}
            
            {/* footer */}
              <footer className="container site-footer">
                <div className="row">
                  <aside className="col-36-34 offset-left-36-1 partners">
                    {/* aca van los logos */}
                  </aside>
                  <section className="info col-36-14 offset-left-36-11">
                    <ul className="social-media">
                      <li>
                        <a href="#">facebook</a>
                      </li>
                      <li>
                        <a href="#">instagram</a>
                      </li>
                      <li>
                        <a href="#">twitter</a>
                      </li>
                    </ul>
                    <address>
                      <p>Av. del Libertador 8620, C1429 - C.A.B.A. - ARGENTINA</p>
                      <p>TELÉFONO (+54) 11 5591-1077 //  SECRETARIAFPP@GMAIL.COM</p>
                    </address>
                  </section>
                </div>
              </footer>
            {/* footer */}

          </div> 
          {/* @end wrapper */}
        </>
}
