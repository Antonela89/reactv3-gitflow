import "./App.css";
import React, { useEffect, useState } from "react";
import Tmdb from "./hugo/opcion1/data/Tmdb";
import Loader from "./hugo/opcion1/components/loader/Loader";
import MovieList from "./hugo/opcion1/components/movielist/MovieList";
import HeroMovie from "./hugo/opcion1/components/heromovie/HeroMovie";
import Header from "./hugo/opcion1/components/header/Header";
// import Login from "./componentes/Login.jsx";
// import Api from "./componentes/Api.jsx";
// import Api2 from "./componentes/Api2.jsx";
// import Api3 from "./componentes/Api3.jsx";
// import Api4 from "./componentes/Api4.jsx";
// import ComponenteYas from "./componentes/componenteYas.jsx";
// import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true); //Para el control del loader
  const [error, setError] = useState(null); //Para mostrar o no el mensaje en pantalla
  const [movieList, setMovieList] = useState([]); //Para guardar el listado de peliculas
  const [heroMovieData, setHeroMovieData] = useState(null); //Para saber si muestro o no el hero, dependiendo si tengo o no data
  const [blackHeader, setBlackHeader] = useState(false); //Para poner o no el fondo oscuro en el header

  //Manejo la carga inicial de las listas
  useEffect(() => {
    // Defino la función asincrónica loadAll para cargar los datos
    const loadAll = async () => {
      try {
        // Intento obtener la lista de la API utilizando el método getHomeList de Tmdb
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        // Busco aleatoriamente un item de una lista especificada
        let filteredMovies = list.filter((item) => item.slug === "originals");
        // Elijo aleatoriamente una película de la lista filtrada
        let randomChosen = Math.floor(
          Math.random() * filteredMovies[0].items.results.length
        );
        let chosen = filteredMovies[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
        setHeroMovieData(chosenInfo);
      } catch (error) {
        // En caso de error durante la carga de datos, registro el error en la consola
        console.error("Error loading data:", error);

        // Establezco un mensaje de error en el estado para informar al usuario
        setError(
          "Hubo un error al cargar los datos. Por favor, inténtalo de nuevo más tarde."
        );
      } finally {
        // Independientemente de si la carga fue exitosa o no, marco la carga como completa
        setIsLoading(false);
      }
    };
    // Llamo a la función loadAll al montar el componente (cuando [] está vacío)
    loadAll();
  }, []);

  //Monitoreo el scroll de la pagina
  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false);
    };

    window.addEventListener("scroll", scrollListener);
    //Elimino el evento cuando salgo de la página
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="App">
      {/* Lo comento para probar el componente MovieCatalog */}
      {/* <BrowserRouter> */}
      {/* <Login /> */}
      {/* </BrowserRouter> */}
      <div>
        {isLoading ? (
          // Muestro el loader mientras se cargan los datos
          <Loader />
        ) : error ? (
          // Muestro un mensaje de error si ocurrió un error durante la carga de datos
          <div>{error}</div>
        ) : (
          // Muestro el contenido de la aplicación una vez que los datos se han cargado
          <div className="page">
            <Header black={blackHeader} />
            {heroMovieData && <HeroMovie item={heroMovieData} />}
            <section className="lists">
              {movieList.map((item, key) => (
                <MovieList key={key} title={item.title} items={item.items} />
              ))}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
