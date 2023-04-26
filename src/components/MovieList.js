import React from 'react'
import MovieCard from './MovieCard'

function MovieList( {movies}) {
  return (
    <div style={{display:'flex',justifyContent:'space-around',gap:'20px',flexWrap:'wrap'}}>
      {
        movies.map(
          (film)=>(<MovieCard film={film} key={film.id}/>
          )
        )
      }
    </div>
  )
}

export default MovieList
