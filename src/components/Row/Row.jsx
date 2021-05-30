import React, { useState, useEffect } from "react";
import axios from "../../axios";

import classes from "./Row.module.css";

import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height : '390',
    width : '100%',
    playerVars : {
      autoplay : 1
    }
  }

  const onHandleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('')
    }else{
      movieTrailer(movie?.name || movie?.title || movie?.original_title || '')
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
        // console.log(urlParams)
      })
      .catch(err => {
        console.log(err);
      })
    }
  }


  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={classes.row__posters}>
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={onHandleClick.bind(null, movie)}
            className={`${classes.row__poster} ${
              isLargeRow && classes.row__posterLarge
            }
            `}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
