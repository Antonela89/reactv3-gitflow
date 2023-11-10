const API_KEY = "3e747184efcfd89223c4bfd040944e68";
const API_BASE = "https://api.themoviedb.org/3";

/*
- Originales de netflix (originals)
- Recomendados (trending)
- Mas votados (top rated)
- Accion
- Comedia
- Terror
- Romance
- Documentales
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
};

const Tmdb = {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originales de netflix",
                items: await basicFetch(
                    `/discover/tv?with_network=213&language=es-AR&api_key=${API_KEY}`
                )
            },
            {
                slug: "trending",
                title: "Recomendado para vos",
                items: await basicFetch(
                    `/trending/all/week?language=es-AR&api_key=${API_KEY}`
                )
            },
            {
                slug: "toprated",
                title: "Más votados",
                items: await basicFetch(
                    `/movie/top_rated?language=es-AR&api_key=${API_KEY}`
                )
            },
            {
                slug: "action",
                title: "Acción",
                items: await basicFetch(
                    `/discover/movie?with_genres=28&language=es-AR&api_key=${API_KEY}`
                )
            },
            {
                slug: "comedy",
                title: "Comedia",
                items: await basicFetch(
                    `/discover/movie?with_genres=35&language=es-AR&api_key=${API_KEY}`
                )
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(
                    `/discover/movie?with_genres=27&language=es-AR&api_key=${API_KEY}`
                )
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(
                    `/discover/movie?with_genres=10749&language=es-AR&api_key=${API_KEY}`
                )
            },
            {
                slug: "documentary",
                title: "Documentales",
                items: await basicFetch(
                    `/discover/movie?with_genres=99&language=es-AR&api_key=${API_KEY}`
                )
            }
        ];
    }
};

export default Tmdb;
