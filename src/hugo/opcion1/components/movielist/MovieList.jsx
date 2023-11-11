import React, { useState } from "react";
import "./MovieList.css";

/**
 * Componente que renderiza una lista de películas con flechas de navegación horizontal.
 *
 * @param {Object} props - Mis propiedades.
 * @param {string} props.title - Título de la lista de películas.
 * @param {Object} props.items - Objeto con la información de las películas.
 * @returns {JSX.Element} Elemento JSX que representa la lista de películas.
 */
const MovieList = ({ title, items }) => {
  // Estado local para el desplazamiento horizontal de la lista.
  const [scrollX, setScrollX] = useState(0);

  /**
   * Manejo del evento clic de la flecha izquierda, ajustando el desplazamiento.
   */
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    // Ajusto el desplazamiento a 0 si se excede el límite izquierdo.
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  /**
   * Manejo del evento clic de la flecha derecha, ajustando el desplazamiento.
   */
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    // Ajusto el desplazamiento para que no se vaya más allá del final de la lista.
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 80;
    }
    setScrollX(x);
  };

  // Renderizo la lista de películas.
  return (
    <div className="movieList">
      <h2>{title}</h2>
      {/* Flecha izquierda para desplazarse hacia la izquierda */}
      <div className="movieList--Arrow-Left" onClick={handleLeftArrow}>
        <i className="bi bi-chevron-compact-left" style={{ fontSize: 50 }}></i>
      </div>
      {/* Flecha derecha para desplazarse hacia la derecha */}
      <div className="movieList--Arrow-Right" onClick={handleRightArrow}>
        <i className="bi bi-chevron-compact-right" style={{ fontSize: 50 }}></i>
      </div>
      {/* Contenedor de la lista de películas */}
      <div className="movieList--container">
        {/* Lista de películas */}
        <div
          className="movieList--list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            // Mapeo de cada película para su visualización en la lista
            items.results.map((item, key) => (
              <div key={key} className="movieList--item">
                {/* Imagen de la película */}
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
