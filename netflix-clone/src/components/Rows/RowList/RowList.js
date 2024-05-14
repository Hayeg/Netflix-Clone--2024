import React from 'react'
// import "./rowList.css"
import Row from '../Row/Row'
import requests from '../../../utils/request'

const RowList = () => {
  return (
    <>
    <Row 
        title="Neflix Orginals"
        fetchUrl={requests.fetchNetflixOriginals}/>
    <Row 
    title="Trending Now"
    fetchUrl={requests.fetchTrending} />
    <Row 
    title="Top Rated"
    fetchUrl={requests.fetchTopRatedMovies} />
    <Row 
    title="Action Movies"
    fetchUrl={requests.fetchActionMovies} />
    <Row 
    title="Comedy Movies"
    fetchUrl={requests.fetchComedyMovies} />
    <Row 
    title="Horror Movies"
    fetchUrl={requests.fetchHorrorMovies} />
    <Row 
    title="Romance Movies"
    fetchUrl={requests.fetchRomanceMovies} />
    <Row 
    title="Drama Movies"
    fetchUrl={requests.fetchDramaMovies} />
    <Row 
    title="Up Comming"
    fetchUrl={requests.fetchUpcomming} />
    <Row 
    title="Docmentaries"
    fetchUrl={requests.fetchDocumentaries} />
    </>
  )
}

export default RowList
