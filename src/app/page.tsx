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
              <nav className="site-nav container">
                <div className="row">
                  <div className="col-36-5 offset-left-36-2">
                    <div className="logo">
                      <figure>
                        <img src="" alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="col-36-28 offset-left-36-1">
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
                </div>
              </nav>
            </header>
          {/* header  */}

          {/* image header */}
          <section className="image-header container">
            <div className="row">
              <div className="col-36-34 offset-left-36-1">
                <figure>
                  <img src="#" alt="#" />
                </figure>
              </div>
            </div>
          </section>
          {/* image header */}

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
                      <a href=""></a>
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
        // @end wrapper
}
