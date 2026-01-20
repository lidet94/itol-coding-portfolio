import React from 'react'
import './TvCard.css' 

export const TvCard = ({show}) => {
  return (
    <div className='tv-card'>
      <img className='poster' src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}alt="Poster placeholder" ></img>
      <h2>{show.name}</h2>
      <p>{show.first_air_date}</p>
      <p>{show.overview}</p>
    </div>
  )
}


