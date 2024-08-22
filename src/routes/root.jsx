import { Outlet,Link } from "react-router-dom";
import styles from './root.module.css'
import { useEffect, useState } from "react";

export default function Root() {








    return (
        <>
  <header className={styles.Header}> 
  
    <span>
      cineReviews

      
    </span>
    <nav>
      <ul className={styles.navelist}>
        
        <li>
        <Link to="/">
          <a href="#">Home</a>
          </Link>
        </li>
        <li>
        <Link to="/options/bhdwh">
          <a href="#">About</a>
          </Link>
        </li>
        <li>
        <Link to="/">
          <a href="#">Movies</a>
          </Link>
        </li>
        <li>
        <Link to="/Singup"> 
          <a href="#">SingUp</a>
          </Link>
        </li>
        
        <li>
          <Link to="/add-movie">
            
          <a href="#">Add-movie</a>
          </Link>
        </li>
       
      </ul>
    </nav>
    </header>
    <Outlet />


    
    
    
    <footer className={styles.footer}>
<section>

<ul className={styles.contactbutton}>
  
<li>Instagram</li>
<li>Facebook</li>
<li>E-mail</li>
</ul>
</section>
<div className={styles.pramdiv}><p className={styles.pram}>Copyright © 2022 ciniMovie.
All Rights Reserved. ciniMovie</p>
<span>Created and Cared by <h3>F&K</h3></span></div>
</footer>

    
  


    
   
    </>
    );
  }