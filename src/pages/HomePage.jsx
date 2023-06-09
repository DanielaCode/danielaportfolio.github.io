import React, { useEffect, useState } from 'react'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Stack from '../components/Stack'
import styles from './HomePage.module.css';
import {useThemeContext} from '../providers/GeneralProvider'
import insta from '../assets/Instagram.png'
import insta2 from '../assets/Instagram2.png'

import linkedin from '../assets/LinkedIn.png'
import linkedin2 from '../assets/LinkedIn2.png'

import gh from '../assets/GitHub.png'
import gh2 from '../assets/GitHub2.png'
import { useRefContext } from '../providers/RefProvider'

const HomePage=()=>{
  const generateKey = (pre) => {
    return `${ pre }${Math.random()}${ new Date().getTime() }`;
  }
  const theme = useThemeContext();
  const [menuOn, setMenuOn] = useState(false);
  const refs = useRefContext()
  const socialMedia=[
    {
      id: generateKey("1"),
      img:theme.theme?linkedin:linkedin2,
      link:"https://www.linkedin.com/in/danielacode/"
    },
    {
      id: generateKey("2"),
      img:theme.theme?insta:insta2,
      link:"https://www.instagram.com/danielagtrzp/"
    },
    {
      id: generateKey("3"),
      img:theme.theme?gh:gh2,
      link:"https://github.com/DanielaCode"
    }
  ]
  const sm = socialMedia.map((item)=>
      <a href={item.link} target='_blank' key={item.id}>
         <img src={item.img} />
      </a>
  )
  const handleMenuHover=(e)=>{
    setMenuOn(true)
  }
  const handleMenuOut=(e)=>{
    setMenuOn(false)
  }
  let handleClick;
  useEffect( handleClick = (anchor)=> {
    var element;
      if (anchor==="about") {
        element = refs.about.current;
      } else if(anchor==="stack"){
        element = refs.stack.current;
      } else if(anchor==="dani"){
        setMenuOn(!menuOn)
      }
      if (element) {
          element.scrollIntoView({
          behavior: "smooth",
            block: "start",
        });
     }
  },[]);

  return (
    <div className={`${styles.HomePage} ${theme.theme?styles.ligth:styles.dark}`}>
       <header className={`semiBold ${styles.header} ${theme.theme?styles.headerLigth:styles.headerDark}`}>
        <label className={styles.switch}>
          <input type='checkbox' value={theme} onChange={theme.handleTheme}/>
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
        <div className={styles.menu} onMouseEnter={handleMenuHover} onMouseLeave={handleMenuOut}>
          {menuOn &&
            <nav>
              <ul>
                <li onClick={()=>handleClick("about")}>about.</li>
                <li onClick={()=>handleClick("stack")}>stack.</li>
              </ul>
            </nav>
          }
          <p className={styles.name} onClick={()=>handleClick("dani")}>daniela.</p>

        </div>
       </header>
       <main className={styles.main}>
        <Welcome/>
        <About/>
        <Stack/>
       </main>
       <footer>
        <div className={styles.contact}>
          <h2>Get in touch</h2>
          <p>Email: danielagp96@gmail.com</p>
          <p>Phone: +525619293640</p>
        </div>
        <div className={styles.sm}>
          {sm}
        </div>
       </footer>
    </div>
  )
}

export default HomePage