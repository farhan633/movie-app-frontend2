import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [Movies, setMovies]= useState([])
useEffect(()=>{
fetch('http://localhost:3000/movies')
.then(res=>res.json())
.then(movies=>setMovies(movies))
.catch(err=>console.log(err))
},[])


  return (
  <>
  <header>
    <span>
      cineReviews

      
    </span>
    <nav>
      <ul className='navelist'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
       
      </ul>
    </nav>
    </header>
    <main>
<section className='section1'>
<h1>Welcome to the world  of movie reviews</h1>

</section>
<section className='section2 container'>
  <h2>Udayakrishna Cinematic universe</h2>
  <ul className='movieslist'>
    {
      Movies.map(Movi =>
      <li className='movi' key={Movi.id}>
      <img src={Movi.poster} alt=""/>
      <h3>*{Movi.title}</h3>
    <span>directed by:- {Movi.director} </span>

    </li>
       
       
        
        )
    }
  
  </ul>

</section>
    </main>
    <footer>

    </footer>
    </>
  );
  //done 1.17
}

export default App;
