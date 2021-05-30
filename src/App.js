import React from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";


import requests from "./requests";


function App() {

  

  return (
    <div className="app">
      <NavBar />
      <Banner />
      
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      
    </div>
  );
}

export default App;
