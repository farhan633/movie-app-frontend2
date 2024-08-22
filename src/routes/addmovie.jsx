import { useRef } from 'react';
import styles from './addmovie.module.css'
import axios from 'axios';


export default function Addmovie() {

    const titleref = useRef()
    const directorref = useRef()
    const summaryref = useRef()
const posterref = useRef()

function handleSubmit(e){
    e.preventDefault()
    const title = titleref.current.value
    const director = directorref.current.value
    const summary = summaryref.current.value
    const poster = posterref.current.value
 const data ={
    title:title,
    director:director,
    summary:summary,
    poster:poster
 }

 axios.post('http://localhost:3000/movies',data)
.then(data => {
    console.log(data)
    alert("new movie added susscefull")
    

})
.catch(error =>{
    console.log(error)
})
}

    return (
      
<main className={styles.main}>
    <section className={styles.sectinAdd}>
<h1>Add new movie</h1>
    <form onSubmit={handleSubmit} className={styles.addForm}>
        <label htmlFor="title">Title</label>
        <input ref={titleref} type="text" id="title" />
        <label htmlFor="director">Director</label>
        <input  ref={directorref} type="text" id="director" />
        <label htmlFor="poster">Poster</label>
        <input  ref={posterref} type="text" id="poster" />
        <label htmlFor="summary">Summary</label>
        <textarea ref={summaryref} id="summary"></textarea>
        <button type="submit">Addmovie</button>
    </form>

    </section>
   
</main>



    );
  }