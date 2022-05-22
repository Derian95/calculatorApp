import React,{useState} from "react";
import styles from "./Keyboard.module.css";
import Button from "../../components/button/Button";
import Operation from "../../components/operationButton/Operation";
import Monitor from "../../components/monitor/Monitor";

export const MyContext = React.createContext("");

export default function Keyboard() {

  const [numberAgree, setNumberAgree] = useState("");
  
  return (
    <MyContext.Provider value={numberAgree}>

      <div className={styles.container}>

        <Monitor result={numberAgree}/>
        <Operation signo={"Clear"} est={setNumberAgree}/>
        <Operation signo={"C"} est={setNumberAgree}/>
        <Operation signo={"-"} est={setNumberAgree}/>

        <Button number={1} est={setNumberAgree} est2={numberAgree}/>
        
        <Button number={2} est={setNumberAgree} est2={numberAgree}/>
        <Operation signo={"+"} est={setNumberAgree}/>

        <Button number={3} est={setNumberAgree} est2={numberAgree}/>
        
        <Button number={4} est={setNumberAgree} est2={numberAgree}/>

        <Operation signo={"*"} est={setNumberAgree}/>

        <Button number={5} est={setNumberAgree} est2={numberAgree}/>

        <Button number={6} est={setNumberAgree} est2={numberAgree}/>
        <Operation signo={"/"} est={setNumberAgree}/>

        <Button number={7} est={setNumberAgree} est2={numberAgree}/>
        <Button number={8} est={setNumberAgree} est2={numberAgree}/>

        <Operation  signo={"="} est={setNumberAgree}/>

        <Button number={9} est={setNumberAgree} est2={numberAgree}/>
        <Button number={0} est={setNumberAgree} est2={numberAgree}/>
        
      </div>
    </MyContext.Provider>
  );
}
 