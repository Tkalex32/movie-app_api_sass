import React from "react";
import "./movie-card.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import apiConfig from "../../api/apiConfig";

const MovieCard = ({ item, category }) => {
  const link = `/${category}/${item.id}`;
  const imagePresent = item.poster_path || item.backdrop_path;
  const bg = imagePresent
    ? apiConfig.w500Image(item.poster_path || item.backdrop_path)
    : apiConfig.noImage;
  const bgColor = imagePresent ? null : "#dbdbdb";

  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${bg}`, backgroundColor: `${bgColor}` }}
      >
        <Button>
          <i className="bx bx-play bx-md"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
