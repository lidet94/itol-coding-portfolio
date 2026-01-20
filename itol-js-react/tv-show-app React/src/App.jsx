import { useState } from 'react'
import { Header } from './assets/components/Header'
import { GenreFilter } from './assets/components/GenreFilter'
import { TvShows } from './assets/components/TvShows'
import './App.css' 
import { SearchBar } from './assets/components/SearchBar'


function App() {
 const [selectedGenre, setSelectedGenre] = useState('')
 const [searchTerm, setSearchTerm] = useState('')

 const handleGenreChange = (genreid)=>{
  setSelectedGenre(genreid)
 }

 const handleSearch = (Term)=>{
  setSearchTerm(Term)
 }

  return (
    <>
    <Header  />
    <SearchBar onSearch={handleSearch}/>
    <GenreFilter onGenreChange={handleGenreChange} />
    <TvShows selectedGenre={selectedGenre} searchTerm={searchTerm}/>
    </>
  )
}

export default App
