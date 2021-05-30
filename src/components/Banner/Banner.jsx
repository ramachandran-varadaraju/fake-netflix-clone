import React, { useState, useEffect } from "react";

import classes from "./Banner.module.css";

import axios from "../../axios";
import requests from "../../requests";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(requests.fetchHorrorMovies);
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    }

    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.banner__content}>
        <h1 className={classes.banner__title}>
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className={classes.banner__buttons}>
          <button className={classes.banner__button}>Play</button>
          <button className={classes.banner__button}>My List</button>
        </div>
        <h2 className={classes.banner__description}>
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className={classes.banner__fadedbottom}></div>
    </header>
  );
}

export default Banner;
