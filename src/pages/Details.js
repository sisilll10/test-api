import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NegaraDetails from '../components/NegaraDetails';


const Details = () => {
  const [negara, setNegara] = useState({});
  const { key } = useParams();

  useEffect(() => {
    // hit TMDB endpoint to get details of a movie
    fetch(`https://data.covid19.go.id/public/api/prov.json?${key}`)
    .then(response => response.json())
    .then(data => setNegara(data));
    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      <NegaraDetails negara={negara} />
      <Footer />
    </>
  );
}

export default Details;
