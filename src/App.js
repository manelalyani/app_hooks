import './App.css';
import Addmovie from './components/Addmovie';

import MovieList from './components/MovieList';
import Filter from './components/Filter ';
import SearchMovie from './components/SearchMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {listmovie} from "./data.js";
function App() {
  const [movies ,setMovies]=useState (listmovie);
  const handleadd = (newmovie) => {
    //console.log(newmovie);
setMovies([{...newmovie,id:Math.random()},...movies])
  }
  
  const [searchbyName,setSearchbyName] = useState("") ;
  const handleName = (searchedvalue) => {
    setSearchbyName(searchedvalue)
   
  };
//search by rate 
const [rating, setRating] = useState(0)

// Catch Rating value
const handleRating = (rate) => {
  setRating(rate)
};
const handleReset = () => {
  // Set the initial value
  setRating(0)
}
  return (
    <div className="App" >
        < SearchMovie
        rating={rating}
         handleReset={handleReset} 
        handleName={handleName} 
        handleRating={handleRating}/>
      <Addmovie handleadd={handleadd}/>
      <MovieList movies={movies.filter(el=>el.name.includes(searchbyName) && el.rating >= rating)}/>
      <Filter/>
    
      

    </div>
  );
}

export default App;
