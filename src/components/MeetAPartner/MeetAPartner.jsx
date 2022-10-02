import React, { useState, useEffect } from "react";
import "./meetAPartner.css";
import { Partner } from "../../cards";

import axios from "axios";

import avatar1 from "../../images/Avatar1.png";
import avatar2 from "../../images/Avatar2.png";
import avatar3 from "../../images/Avatar3.png";
import avatar4 from "../../images/Avatar4.png";

const MeetAPartner = () => {
  const [actorsList, setActorsList] = useState({});
  const [show_n_Actors, setShow_n_Actors] = useState(4);

  // !DATA FROM API START
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/actors",
    params: { limit: show_n_Actors, page: "1" },
    headers: {
      "X-RapidAPI-Key": "c864a3591bmsh5e772c04e59f4bdp15c7f2jsn6f0545c56764",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getApiData = async () => {
    const data = await axios.request(options).catch(function (error) {
      console.error(error);
    });

    setActorsList(data?.data?.results);
  };
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show_n_Actors]);

  const showMoreActors = () => {
    if (show_n_Actors < 12) {
      setShow_n_Actors((prev) => prev + 4);
      // getApiData();
    } else if (show_n_Actors >= 12) {
      setShow_n_Actors((prev) => prev);
    }
  };

  // *****The next few lines are simply to provide images for the actors as the API doesn't provide images for the authors
  const imgList = [avatar1, avatar2, avatar3, avatar4];
  let imgIndex = 0;

  const imgIndexFunc = () => {
    if (imgIndex < imgList.length) {
      imgIndex += 1;
    } else if (imgIndex >= imgList.length) {
      imgIndex = 1;
    }

    return imgList[imgIndex - 1];
  };
  // *****The previous lines above were simply to provide images for the actors as the API didn't provide images for the authors

  return (
    <div className="meet_partner">
      <h2 className="section-heading">Most Popular Celebs</h2>
      <div className="partners_container">
        {actorsList.length > 0 ? (
          actorsList?.map((actor) => (
            <Partner
              key={actor.id}
              img={imgIndexFunc()}
              name={actor.primaryName}
              about={`Born ${
                actor.birthYear
              }. ${actor.primaryProfession.replace(/,/g, ", ")}`}
            />
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </div>
      <button
        className="rounded-button hover_bg"
        onClick={() => showMoreActors()}
      >
        Load More Actors
      </button>
    </div>
  );
};

export default MeetAPartner;
