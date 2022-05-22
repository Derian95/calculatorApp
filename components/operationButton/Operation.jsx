import React from 'react'
import { MyContext } from '../../layouts/keyboard/Keyboard';
import styles from './Operation.module.css'
export default function Operation({signo,est}) {
  
const contex=React.useContext(MyContext);
 
const solution=(sig)=>{

    if(sig==="Clear"){
      est("");}
      else if (sig==="C"){
          est(contex.slice(0,-1));
      }
      else if(sig==="="){
        let result=eval(contex)
        est(result)
      }
      else{
        est(contex.concat(sig));
      }
    }
    return (
    <input type="button"  className={signo=="="?styles.equal:styles.buttonOperation} value={signo}
    onClick={()=>solution(signo)}
    />
  )
}
