import api from "@/api"
import '../../styles/globals.css'

export default async function Home() {
  const links = await api.links.fetch();
  
  return <> 
        <header>

          <nav>
            <ul><li><a href="#">volver</a></li></ul>
          </nav>
        </header>
        <main> 
          <figure>
            <img src="#" alt="#" />
          </figure>
          <ul>
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </main>
        <footer>

        </footer>
        </>
}
