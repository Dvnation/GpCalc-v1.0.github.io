import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from './part2';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { NavBar } from './Components/NavBar';
import { HowTo } from './Components/HowTo';
import { Loading } from './loader';







function App() {
    const [ask,unask] = useState()
    const [load, unload] = useState(true)

    
 

    useEffect(()=>{
        let man = document.querySelector('.van')
    man.style.background = "gold"

    let mans = document.querySelector('.van')
    mans.style.color = "black"
       

setTimeout(() => {
    window.onload = () => {
console.log("dvgbdasiusi");     }
    
    unload(false)

    const way =  prompt("input a nick name")
    unask(way)
    console.log(window.screen.orientation.type);
 if (window.screen.orientation.type !== "landscape" ||     window.screen.orientation.type !== "landscape-primary") {
    alert("for better experience, change your display to landscape-mode")

 }
 else(alert("it is fine"))

 
}, 3000);
    },[])
    return (
        load == true ? 

   

        <> 
        
      <Loading/>
     
        </> :
        <>
       <NavBar/>
<Routes>
    <Route path='/' element = {<Table ask={ask}/>}> </Route>
    <Route path='about' element = {<About/>}> </Route>
    <Route path='HowTo' element= {<HowTo/>}></Route>

</Routes>

        </>
    )


    
}

export default App;
