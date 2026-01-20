import React, { useEffect, useState } from 'react'
import './GenreFilter.css'
 
export const GenreFilter = ({onGenreChange}) => {

    const [genres, setGenres] = useState([])

    const fetchGenre = async()=>{
        const response = await fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=95413dce29ab64c273356f1f8e068d38')
        const data = await response.json()
        console.log(data)
        setGenres(data.genres)
    }
    useEffect(()=>{
        fetchGenre()
    }, [])

    

  return (
    <div className='genre-filter'>
        <h3>Filter Genre</h3>
      <select
      onChange={(e)=>onGenreChange(e.target.value)}>
        <option value="">All Genres</option>

       {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}

      </select>
    </div>
  )
}
