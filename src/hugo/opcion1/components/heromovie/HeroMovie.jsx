import React from "react";
import "./HeroMovie.css";
import { truncateText } from "../../utils/utils";
import MyButton from "../mybutton/MyButton";

export default function HeroMovie({ item }) {
  console.log(item);
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="hero--vertical">
        <div className="hero--horizontal">
          <div className="hero--title">
            <div className="hero--name">{item.name}</div>
            <div className="hero--original-name">{item.original_name}</div>
          </div>
          <div className="hero--info">
            <div className="hero--points">{item.vote_average} puntos</div>
            <div className="hero--year">{firstDate.getFullYear()}</div>
            <div className="hero--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="hero--description">
              {truncateText(item.overview, 30)}
            </div>
            <div className="hero--buttons">
              <MyButton
                link={`/watch/${item.id}`}
                text="▶ Ver"
                backgroundColor="#fff"
                color="#000"
              />
              <MyButton
                link={`/list/add/${item.id}`}
                text="+ Mi lista"
                backgroundColor="#333"
                color="#fff"
              />
            </div>
            <div className="hero--genres">
              <strong>Géneros: </strong>
              {genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
