import React, { useEffect,useState} from 'react'
import './banner.css'
import axios from '../../utils/axios';
import request from '../../utils/request';

const base_url2 = "https://image.tmdb.org/t/p/original/"

const Banner = () => {
  const [movie,setMovie] =useState([]);
useEffect(() => {
  (async () => {
    try {
      const requests = await axios.get(request.fetchNetflixOriginals);
      console.log(requests)
      setMovie(requests.data.results[
        Math.floor(Math.random() * requests.data.results.length)
      ]);
    } catch (error) {
      console.log("error",error);
      }
    })()
  }, []); 
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
return (
      <div
    className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(${base_url2}${movie?.backdrop_path})`, // Here is the correction
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat"
    }}
  >

    <div className="banner__contents">
      <h1 className="banner__title">
        {movie?.title || movie?.name || movie.original_name}
      </h1>
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
      <h1 className="banner__description">
        {truncate(movie?.overview, 150)}
      </h1>
    </div>
    <div className="banner__fadeBottom" />
  </div>
);
};
export default Banner;


