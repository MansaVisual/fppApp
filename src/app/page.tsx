import api from "@/api"
import '../../styles/globals.css'

export default async function Home() {
  const links = await api.links.fetch();
  
  return <main> 
          
        </main>
}
