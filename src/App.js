import "./App.css";
import React, { useEffect, useState } from "react";
import Tmdb from "./hugo/opcion1/data/Tmdb";
import Loader from "./hugo/opcion1/components/loader/Loader";
// import Login from "./componentes/Login.jsx";
// import Api from "./componentes/Api.jsx";
// import Api2 from "./componentes/Api2.jsx";
// import Api3 from "./componentes/Api3.jsx";
// import Api4 from "./componentes/Api4.jsx";
// import ComponenteYas from "./componentes/componenteYas.jsx";
// import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Defino la función asincrónica loadAll para cargar los datos
    const loadAll = async () => {
      try {
        // Intento obtener la lista de la API utilizando el método getHomeList de Tmdb
        let list = await Tmdb.getHomeList();
        setMovieList(list);
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
            <section className="lists">
              {movieList.map((item, key) => (
                <div key={key}>{item.title}</div>
              ))}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
