import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_image = "http://image.tmdb.org/t/p/w500";
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on the specific conditions/variable
  useEffect(() => {
    async function fetchDATA() {
      const request = await axios.get(fetchURL);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchDATA();
  }, [fetchURL]); // if we leave the bracket empty then run once wheen the row loads and dont run again

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_image}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
