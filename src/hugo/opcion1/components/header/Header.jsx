import React from "react";
import "./Header.css";

export default function Header({ black }) {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="./assets/img/reactv-logo_001.png" alt="Logo React TV" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="./assets/img/perfil0001.png" alt="Imagen Perfil Usuario" />
        </a>
      </div>
    </header>
  );
}
