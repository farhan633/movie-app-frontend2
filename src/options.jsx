import styles from './optines.module.css'
import { Link } from 'react-router-dom';



export default function Options() {
   
  
    return (
   <main className={styles.optionmain}>
<section>
   <Link to= '/singup'> <button>sing in for more acces</button></Link>
  
  <ul className={styles.contactbutton}>
   <li>Instagram</li>
   <li>Facebook</li>
   <li>E-mail</li>
  </ul>
  </section>
  <div className={styles.pramdiv}><p className={styles.pram}>Copyright © 2022 ciniMovie.
All Rights Reserved. ciniMovie</p>
<span>Created and Cared by <h3>F&K</h3></span></div>
  

   </main>
    );
  }