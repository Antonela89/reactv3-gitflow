// Defino la clave de la API y la URL base de la API de The Movie Database (TMDb)
// Esto definirlo en variables de entorno

const API_KEY = "3e747184efcfd89223c4bfd040944e68";
const API_BASE = "https://api.themoviedb.org/3";
const API_LANGUAGE = "es-AR";

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

// Función básica para realizar solicitudes a la API
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
};

const Tmdb = {
    /**
     * Obtiene una lista de categorías de películas con información detallada de cada categoría.
     * @returns {Array} - Un array de objetos, cada uno representando una categoría de películas.
     */
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originales de netflix",
                items: await basicFetch(
                    `/discover/tv?with_network=213&language=${API_LANGUAGE}&api_key=${API_KEY}`
                )
            },
            {
                slug: "trending",
                title: "Recomendado para vos",
                items: await basicFetch(
                    `/trending/all/week?language=${API_LANGUAGE}&api_key=${API_KEY}`
                )
            },
            {
                slug: "toprated",
                title: "Más votados",
                items: await basicFetch(
                    `/movie/top_rated?language=${API_LANGUAGE}&api_key=${API_KEY}`
                )
            },
            {
                slug: "action",
                title: "Acción",
                items: await basicFetch(
                    `/discover/movie?with_genres=28&language=${API_LANGUAGE}&api_key=${API_KEY}`
                )
            },
            {
                slug: "comedy",
                title: "Comedia",
                items: await basicFetch(
                    `/discover/movie?with_genres=35&language=${API_LANGUAGE}&api_key=${API_KEY}`
                )
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(
                    `/discover/movie?with_genres=27&language=${API_LANGUAGE}&api_key=${API_KEY}`
                )
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(
                    `/discover/movie?with_genres=10749&language=${API_LANGUAGE}&api_key=${API_KEY}`
                )
            },
            {
                slug: "documentary",
                title: "Documentales",
                items: await basicFetch(
                    `/discover/movie?with_genres=99&language=${API_LANGUAGE}&api_key=${API_KEY}`
                )
            }
        ];
    },

    /**
     * Obtiene información detallada de una película o serie de TV específica.
     * @param {number} movieId - El ID de la película o serie de TV.
     * @param {string} type - El tipo de contenido ("movie" o "tv").
     * @returns {Object} - Un objeto con detalles de la película o serie de TV.
     */
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case "movie":
                    info = await basicFetch(
                        `/movie/${movieId}?language=${API_LANGUAGE}&api_key=${API_KEY}`
                    );
                    break;
                case "tv":
                    info = await basicFetch(
                        `/tv/${movieId}?language=${API_LANGUAGE}&api_key=${API_KEY}`
                    );
                    break;
                default:
                    break;
            }
        }

        return info;
    }
};

export default Tmdb