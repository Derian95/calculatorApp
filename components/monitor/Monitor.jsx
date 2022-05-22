import React from 'react'
import { MyContext } from '../../layouts/keyboard/Keyboard'
import styles from './Monitor.module.css'

export default function Monitor({result}) {
  const contex = React.useContext(MyContext);
  return (
    <div className={styles.container}> {result}</div>
  )
}
