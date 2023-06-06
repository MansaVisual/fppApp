import Papa from "papaparse";

type Link = {
    label: string;
    url: string;
};

const api = {
    links: {
        fetch: async () => {
            const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSWhgEXxLV3UMXJeyR59TCKfFjponKO-l90nd9fJFGtA5cDSeA-vu5AvPhLFp9ndFcmeOrmeG8UlVXe/pub?gid=958589692&output=csv");
                const data = await res.text();
                const parsed = await new Promise<Link[]>((resolve, reject)=>{
                  Papa.parse<Link>(data, {
                    header: true, 
                    complete: (result) => resolve(result.data), 
                    error: reject,
                  })
                })
                return parsed;
              }
    }
}

export default api