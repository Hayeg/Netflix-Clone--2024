import React, { useEffect, useState } from 'react'
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original";


    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl)
                const request = await axios.get(fetchUrl);
                console.log(request)
                setMovie(request.data.results);
            } catch (error) {
                console.log("error", error);
            }
        })()
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    console.log(url)
                    const urlParams = new URLSearchParams(new URL(url).search)
                    console.log(urlParams)
                    console.log(urlParams.get('v'))
                    setTrailerUrl(urlParams.get('v'));
                })
        }
    }

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies?.map((movie, index) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    )
}

export default Row




















// import React, { useState, useEffect, useRef } from "react";
// import axios from "../../../utils/axios";
// import "./row.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// const base_url = "https://image.tmdb.org/t/p/original/";

// function Row({ title, fetchUrl, isposter }) {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");
//   const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
//   const [scrollRightVisible, setScrollRightVisible] = useState(true);

//   const rowRef = useRef(null);
//   const scrollAmount = 500; // Adjust this value to control the scroll distance

//   const scrollLeft = () => {
//     if (rowRef.current) {
//       rowRef.current.scrollLeft -= scrollAmount;
//     }
//   };

//   const scrollRight = () => {
//     if (rowRef.current) {
//       rowRef.current.scrollLeft += scrollAmount;
//     }
//   };

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (rowRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
//         setScrollLeftVisible(scrollLeft > 0);
//         setScrollRightVisible(scrollLeft + clientWidth < scrollWidth);
//       }
//     };

//     if (rowRef.current) {
//       rowRef.current.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       // if (rowRef.current) {
//       //   rowRef.current.removeEventListener("scroll", handleScroll);
//       // }
//     };
//   }, []);

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || "")
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       <div className="row__buttons">
//         {scrollLeftVisible && (
//           <button className="scroll-button" onClick={scrollLeft}>
//             <KeyboardArrowLeftIcon className="icons" />
//           </button>
//         )}
//         <div className="row__posters" ref={rowRef} id={`row-${title}`}>
//           {movies.map((movie) => (
//             <img
//               key={movie.id}
//               onClick={() => handleClick(movie)}
//               className={`row__poster ${isposter && "row__posterLarge"}`}
//               src={`${base_url}${
//                 isposter ? movie.poster_path : movie.backdrop_path
//               }`}
//               alt={movie.name}
//             />
//           ))}
//         </div>
//         {scrollRightVisible && (
//           <button className="scroll-button" onClick={scrollRight}>
//             <KeyboardArrowRightIcon className="icons" />
//           </button>
//         )}
//       </div>

//       <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// }

// export default Row;


