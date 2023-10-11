import { useEffect, useState } from "react"
import { Table } from "./part2"

export function Loading(){
    const[mainBg,setmainBg] = useState()
    const click=()=>{

        setInterval(() => {
            setTimeout(() => {
    
                setmainBg("blue")
            }, 100);
    
            setTimeout(() => {
                setmainBg("green")
            }, 300);
    
            setTimeout(() => {
                setmainBg("pink")
            }, 500);

            setTimeout(() => {
                setmainBg("yellow")
            }, 700);
             setTimeout(() => {
                setmainBg("red")
            }, 900);
        }, 50);
    
     
    }

    useEffect(()=>{
click()
    },[])
   
    return (<>
        <div style={{display: "flex",
            justifyContent: "center",
            background:mainBg, 
            alignItems :"center", 
            height: "100vh", fontSize:"50px" }}>



                          <h3 style={{width:""}}>Loading calculator...</h3>
                          

        </div>

        </>
    )
    
    }



