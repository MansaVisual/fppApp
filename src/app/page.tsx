'use client'
import api from "@/api"
import Head from 'next/head';
import '../../styles/libraries/grid.css'
import '../../styles/libraries/reset.css'
import '../../styles/main.css'
import '../../styles/globals.css'
import Menu from '../components/menu';
import Footer from '../components/footer';
import '../../public/ico.css';
import { Oswald } from 'next/font/google'
 
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})



export default async function Home() {
  const links = await api.links.fetch();
  
  return <>
          <Head>
          </Head>
          <div id="wrapper" className={oswald.className}>
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
                    <ul className="downloads-menu">
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
              <Footer/>
            {/* footer */}

          </div> 
          {/* @end wrapper */}
        </>
}
