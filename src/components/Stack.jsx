import React from 'react'
import styles from './Stack.module.css'
import reactImg from '../assets/react.png'
import csharpImg from '../assets/csharp.png'
import javaImg from '../assets/java.png'
import htmlImg from '../assets/html5.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import nodeImg from '../assets/node.png'
import { useThemeContext } from '../providers/GeneralProvider'
import { useRefContext } from '../providers/RefProvider'


export const Stack = () => {
  const generateKey = (pre) => {
    return `${ pre }${Math.random()}${ new Date().getTime() }`;
  }
  const theme = useThemeContext()
  const refs = useRefContext()
  const languages =[
    {
      id:generateKey("1"),
      name:"ReactJs",
      logo:reactImg,
      level:5,
    },
    {
      id:generateKey("2"),
      name:"C#",
      logo:csharpImg,
      level:4,
    },
    {
      id:generateKey("3"),
      name:"Java",
      logo:javaImg,
      level:3,
    },
    {
      id:generateKey("4"),
      name:"JS",
      logo:jsImg,
      level:3,
    },
    {
      id:generateKey("5"),
      name:"NodeJS",
      logo:nodeImg,
      level:3,
    },
    {
      id:generateKey("6"),
      name:"HTML5",
      logo:htmlImg,
      level:5,
    },
    {
      id:generateKey("7"),
      name:"CSS3",
      logo:cssImg,
      level:5,
    }
  ]
  const nodes= languages.map((l)=>
    <div className={`${theme.theme?styles.lanl:styles.land} `} key={l.id}>
      <img src={l.logo} alt="" />
      <h3>{l.name}</h3>
    </div>
  );
  return (
    <div className={styles.stack} ref={refs.stack}>
      <h2 className='semiBold'>My stack so far</h2>
      <div className={styles.container}>
          {nodes}
      </div>
    </div>
  )
}

export default Stack