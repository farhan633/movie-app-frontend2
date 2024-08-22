import { useEffect, useState } from 'react';

import styles from './home.module.css'

import { Link } from "react-router-dom";

export default function Home() {
    const [Movies, setMovies]= useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then(res=>res.json())
        .then(movies=>setMovies(movies))
        .catch(err=>console.log(err))
        },[])


    return (
        <main className={styles.main}>
          <div className={styles.chuuma}>

          </div>
        <section className={styles.section1}>
        <h1>Welcome to the world  of movie reviews</h1>
        
        </section>
        <section className={styles.container}>
          <h2>Udayakrishna Cinematic universe</h2>
          <ul className={styles.movieslist}>
            {
              Movies.map(Movi =>
             
               <Link to={'/movies/'+Movi._id} key={Movi._id}>
               <li className={styles.movi}>
             
              <img src={Movi.poster} alt=""/>
              <h3>{Movi.title}</h3>
            <span>directed by:- {Movi.director} </span>
        
            </li>

            </Link>
               
                
                )
            }
          
          </ul>
        
        </section>
            </main>
    );
  }
  //55done