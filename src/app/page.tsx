import api from "@/api"
import '../../styles/globals.css'

export default async function Home() {
  const links = await api.links.fetch();
  
  return <main> 
          <h1>Bajadas</h1>
          <ul>
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </main>
}
