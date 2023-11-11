import React from "react";
import PropTypes from "prop-types";
import "./MyButton.css";

/**
 * Componente de botón personalizado.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.link - URL a la que se redirigirá al hacer clic en el botón.
 * @param {string} props.text - Texto que se mostrará en el botón.
 * @param {number} [props.width] - Ancho del botón en píxeles.
 * @param {number} [props.height] - Altura del botón en píxeles.
 * @param {string} [props.backgroundColor='#fff'] - Color de fondo del botón.
 * @param {string} [props.color='#000'] - Color de la tipografía del botón.
 * @returns {JSX.Element} - Elemento JSX que representa el botón.
 */
function MyButton({
  link,
  text,
  width,
  height,
  backgroundColor = "#fff",
  color = "#000",
}) {
  // Crear objeto de estilo
  const style = {};

  // Aplica ancho y alto solo si se proporcionan
  if (width) {
    style.width = `${width}px`;
  }

  if (height) {
    style.height = `${height}px`;
  }

  return (
    <a
      href={link}
      className="custom-button"
      style={{ ...style, backgroundColor, color }}
    >
      {text}
    </a>
  );
}

MyButton.propTypes = {
  /** URL a la que se redirigirá al hacer clic en el botón. */
  link: PropTypes.string.isRequired,
  /** Texto que se mostrará en el botón. */
  text: PropTypes.string.isRequired,
  /** Ancho del botón en píxeles. */
  width: PropTypes.number,
  /** Altura del botón en píxeles. */
  height: PropTypes.number,
  /** Color de fondo del botón. */
  backgroundColor: PropTypes.string,
  /** Color de la tipografía del botón. */
  color: PropTypes.string,
};

export default MyButton;
