import React, { useEffect, useState } from 'react'
import { TvCard } from './TvCard';
import './TvShows.css'

export const TvShows = ({ selectedGenre, searchTerm }) => {

  const [shows, setShows] = useState([])

  useEffect(() => {
    const fetchShow = async () => {
      let url = ''
      if (searchTerm.length > 0){
        url = `https://api.themoviedb.org/3/search/tv?api_key=95413dce29ab64c273356f1f8e068d38&query=${searchTerm}`
      }
     else if (!selectedGenre) {
        url = `https://api.themoviedb.org/3/trending/tv/week?api_key=95413dce29ab64c273356f1f8e068d38`
      }
      else {
        url = `https://api.themoviedb.org/3/discover/tv?api_key=95413dce29ab64c273356f1f8e068d38&with_genres=${selectedGenre}`
      }

      const response = await fetch(url);
      const data = await response.json()
      setShows(data.results)
      console.log(data)
    }

    fetchShow()
  }, [selectedGenre, searchTerm])

  return (
    <div>

      <div className='tv-grid'>
        {shows.map(show => <TvCard key={show.id} show={show} />)}
      </div>
    </div>

  )
}
