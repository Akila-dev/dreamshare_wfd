import React, { useState, useEffect } from "react";
import "./howDreamshareWorks.css";
import axios from "axios";

import { HowWorks } from "../../cards";

const HowDreamshareWorks = () => {
  const [movieList, setMovieList] = useState([]);
  const [show_n_Movies, setShow_n_Movies] = useState(3);

  // !DATA FROM API START
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: {
      info: "mini_info",
      limit: show_n_Movies,
      page: "1",
      titleType: "movie",
      genre: "Action",
      year: "2022",
    },
    headers: {
      "X-RapidAPI-Key": "c864a3591bmsh5e772c04e59f4bdp15c7f2jsn6f0545c56764",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getApiData = async () => {
    const data = await axios.request(options).catch(function (error) {
      console.error(error);
    });

    // return data;
    setMovieList(data?.data?.results);
  };

  useEffect(() => {
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show_n_Movies]);

  const showMoreMovies = () => {
    if (show_n_Movies < 9) {
      setShow_n_Movies((prev) => prev + 3);
      // getApiData();
    } else if (show_n_Movies >= 9) {
      setShow_n_Movies((prev) => prev);
    }
  };

  return (
    <div className="how_works">
      <h2 className="section-heading">Most Popular Movies</h2>
      <div className="card_container">
        {movieList.length > 0 ? (
          movieList?.map((movie) => (
            <HowWorks
              key={movie.id}
              img={movie.primaryImage.url}
              tag={movie.releaseYear.year}
              title={movie.titleText.text}
              text={movie.primaryImage.caption.plainText}
            />
          ))
        ) : (
          <p className="h-400">Loading ...</p>
        )}
      </div>
      <button
        className="rounded-button hover_bg"
        onClick={() => showMoreMovies()}
      >
        Load More Movies
      </button>
    </div>
  );
};

export default HowDreamshareWorks;
