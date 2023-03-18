import React from "react";
import { useState, useEffect } from "react";
import { VIDEOS, YOUTUBEURL } from "../../API/apis";

const MoviesInfo = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const json = await (
      await fetch(`${YOUTUBEURL}${VIDEOS}&part=snippet`)
    ).json();
    setInfo(json.items);
    setLoading(false);
  };

  useEffect(() => {
    getInfo();
  },[])
  return (
    <div>
      {loading ? <h1>Loading..</h1> : null }
    </div>
  );
};

export default MoviesInfo;
