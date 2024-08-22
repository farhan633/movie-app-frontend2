import { useState } from 'react'
import styles from './addreviewfrom.module.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addonereview } from '../features/reviews/reviewSlice'



export default function Addreviewform(props) {


  const [title, setTitle]= useState('')
  const [description, setDescription] = useState('')

const addreviewvisibleform= props.addreviewvisibleform
const setaddreviewvisiblefrom = props.setaddreviewvisiblefrom
const Movieid = props.movieId
const dispatch = useDispatch()





const Handilsumbit= async(e)=>{
    e.preventDefault()


    const data ={
        title: title,
        description: description,
        movie:props.movieId
    }
    try{
        const resdata = await axios.post('http://localhost:3000/reviews',data)
        const reviewdatan = resdata.data
    alert("comment added sussesfully")
    setaddreviewvisiblefrom(false)
    dispatch(addonereview(reviewdatan))

        
    }  
catch(error){
    console.log(error)
}

}

 



 

    return (
      
<>
{addreviewvisibleform&& <div className={styles.addreviewoverlay}>


<form className={styles.addForm} onSubmit={Handilsumbit}>
<div className={styles.closebutton} onClick={()=>setaddreviewvisiblefrom(false)}>
     Close
      
  
    </div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={(e)=>{
            setTitle(e.target.value)
        }} />
        <label htmlFor="description">Description</label>
        <textarea  id="description" onChange={(e)=>{
            setDescription(e.target.value)
        }}></textarea>
        <button type="submit">Add Review</button>
    </form>

</div>}














</>



    );
  }