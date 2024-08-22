import axios from 'axios';
import styles from './Singup.module.css'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Singup() {

const nameref = useRef()
const emailref = useRef()
const passwordref = useRef()
const [update, setupupdate] = useState(false)


function Handilsubmit(e){
    e.preventDefault()

const name = nameref.current.value
const email = emailref.current.value
const password = passwordref.current.value




   const Data={
    name: name,
    email: email,
    password: password

   }




axios.post('http://localhost:3000/users/singup',Data)
.then(data=>{
    console.log(data)
    alert("singup sucsses fully")
    setupupdate(true)

})
.catch(error =>{
    console.log(error)
})



}



    return(


<main className={styles.singupmain}>


    {update? <section>

        <>
 <h1>SingUp successfull</h1>
 <Link to={'/'}>Go back to home page</Link>
 
 </>

    </section>:
    <section className={styles.singupsection}>
    <h1>Creat  accont</h1>
<form className={styles.singupform} onSubmit={Handilsubmit}>
<label htmlFor="name">Name</label>
<input ref={nameref} type="text" name="name" id="name" />
<label htmlFor="email">email</label>
<input ref={emailref} type="text" name="email" id="email"/>
<label htmlFor="password">Password</label>
<input ref={passwordref} type="text" name="password" id="password" />

<button type='submit'>SingUp</button>
</form>

    </section>}





</main>







    );
}