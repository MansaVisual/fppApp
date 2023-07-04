import api from "@/api"
import '../../styles/libraries/grid.css'
import '../../styles/libraries/reset.css'
import '../../styles/main.css'
import '../../styles/globals.css'

export default async function Home() {
  const links = await api.links.fetch();
  
  return <div id="wrapper">
          {/* header  */}
            <header>
              <nav className="site-nav">
                <div className="row-container">
                  <div className="logo">
                    <figure>
                      <img src="" alt="" />
                    </figure>
                  </div>
                  <ul className="main-menu">
                    <li>
                      <a href="#">volver</a>
                    </li>
                  </ul>
                  <menu className="cta-button">
                    <li>
                      <a href="#">CTA</a>
                    </li>
                  </menu>
                </div>
              </nav>
            </header>
          {/* end header  */}

          {/* main */}
            <main className="content-main"> 
              <figure>
                <img src="#" alt="#" />
              </figure>
              <ul className="dowloads-menu">
                {links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </main>
          {/* end main */}
          
          {/* footer */}
            <footer>
              <div className="row-container">
                <aside className="partners"></aside>
                <ul className="social-media">
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
                <address>
                  <p>Av. del Libertador 8620, C1429 - C.A.B.A. - ARGENTINA</p>
                  <p>TELÉFONO (+54) 11 5591-1077 //  SECRETARIAFPP@GMAIL.COM</p>
                </address>
              </div>
            </footer>
          {/* end footer */}

        </div> 
        // @end wrapper
}
