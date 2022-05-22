import React from 'react'
import { MyContext } from '../../layouts/keyboard/Keyboard';
import styles from './Button.module.css'

export default function Button({number,est, est2}) 
{
  const contex = React.useContext(MyContext);

  const agregate=(number)=>{
    est(contex.concat(number));
}
  
  
  return (
    <input className={styles.button} type="button" value={number} 
    onClick={()=>agregate(number)}/>
  
    
  )
}
