import { useEffect, useRef, useState } from 'react';
import styles from './editmovie.module.css'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export async function loader({ params }){
       
    const movieId = params.movieId
   const moviedata = await axios.get('http://localhost:3000/movies/'+movieId)
   
   const movie = moviedata.data
   return{movie}
 
 }




export default function Editmovie() {
 

    const  [moviename, setMoviename] = useState('')
    const [moviedirector, setmoviedirector]= useState('')
    const [poster,setposter]= useState('')
    const [summery,setsummary]= useState('')
    const [updated,setupdate]= useState(false)
  
const {movie} = useLoaderData()
useEffect(()=>{
setMoviename(movie.title)
setmoviedirector(movie.director)
setposter(movie.poster)
setsummary(movie.summary)

},[])

function handleSubmit(e){
    
     e.preventDefault()
    const data ={
        title: moviename,
        director:moviedirector,
        poster:poster,
        summary:summery
    }

    axios.patch('http://localhost:3000/movies/'+movie._id,data)
   .then(data=>{
    console.log(data)
    setupdate(true)

   })
   .catch(error=>{
    console.log(error)
   })
}

    return (
      
<main className={styles.editpagemain}>
 {updated? <section>
 <>
 <h1>Update successfull</h1>
 <Link to={'/'}>Go back to home page</Link>
 
 </>
 </section>
 :<section className={styles.sectinAdd}>
<h1>Edit movie</h1>
    <form  className={styles.addForm} onSubmit={handleSubmit} >
        <label htmlFor="title">Title</label>
        <input  type="text" id="title" value={moviename} onChange={(e)=>{
            setMoviename(e.target.value)
        }}/>
        <label htmlFor="director">Director</label>
        <input  type="text" id="director" value={moviedirector} onChange={(e)=>{
            setmoviedirector(e.target.value)
            
        }}/>
        <label htmlFor="poster">Poster</label>
        <input  type="text" id="poster" value={poster} onChange={(e)=>{
            setposter(e.target.value)
            
        }} />
        <label htmlFor="summary">Summary</label>
        <textarea id="summary" value={summery} onChange={(e)=>{
        setsummary(e.target.value)}} ></textarea>

     <button type="submit">save chenges</button>
       
        
       
    </form>

    </section>
    }
   
</main>



    );
  }
  //
