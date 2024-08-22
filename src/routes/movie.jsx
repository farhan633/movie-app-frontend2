
import { Link } from "react-router-dom";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import styles from './movie.module.css'
import { useEffect, useState } from "react";
import Addreviewform from "../component/addreviewform";
import { useDispatch, useSelector } from "react-redux";
import { addreviews, deletereviewby } from "../features/reviews/reviewSlice";




export async function loader({ params }){
       
   const movieId = params.movieId


   try{
    const moviedata = await axios.get('http://localhost:3000/movies/'+movieId)
  
    const movie = moviedata.data
    return{movie}

   }
   catch(error){
    console.log(error)
    return{movie:null}

   }


}





export default function Movie() {
  const [addreviewvisibleform, setaddreviewvisiblefrom]= useState(false)

   
  const {movie} = useLoaderData()
 
const dispatch = useDispatch()
const reviews = useSelector(state => state.reviews.reviews)

  useEffect(()=>{
    if(movie){
      axios.get('http://localhost:3000/reviews')
      .then(({data})=>{
        dispatch(addreviews(data))
        
        
      })
      .catch(error=>{
        console.log(error)
      })
    }

  },[])

  function hdeleteReview(reviewId){
    axios.delete('http://localhost:3000/reviews/'+reviewId)
    .then(res=>{
      dispatch(deletereviewby(reviewId))

    })
    .catch(error=>{
      console.log(error)
    })
    
  }
  
    return (

   <main className={styles.moviemain}>
    
 <Addreviewform addreviewvisibleform={addreviewvisibleform} setaddreviewvisiblefrom={setaddreviewvisiblefrom} movieId={movie._id}/>




      {movie ? <section className={styles.moviedeatilsection}>
        <img src={movie.poster} alt="" />
        <div>
        <h1>{movie.title}</h1>
        <span>{movie.director}</span>
        <p>{movie.summary}</p>
  <Link className={styles.edit} to ={'/edit-movie/'+movie._id}>edit</Link>
       
  
        </div>
  
        </section>:<span>movie of  give id is wrong</span>
      }
      <section className={styles.sectionReview}>
        <header className={styles.sectionReviewHeader}>
        <h2>Reviews</h2>
        <button onClick={()=>setaddreviewvisiblefrom(true)}>Add Reviews</button>
        </header>
        
        <ul className={styles.Reviewlist}>


          {
            reviews?reviews.map(review=>{
              return(
                <li key={review._id} className={styles.Review}>
  
  <div>

  <h3>{review.title}</h3>
  <span>{review.description}
  </span>

  </div>

  <button onClick={()=>{
    hdeleteReview(review._id)
  }} className={styles.deletebutton}>delete</button>

</li>


              )
            }):<span>this movie is not reviewed</span>
          }



        </ul>
      </section>


   </main>
    );
  }