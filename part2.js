import axios from 'axios'
import {useEffect, useRef, useState} from 'react'
import './Part2.css'
// import './calculator.css'
import { Loading } from './loader'
import { Question } from './loader'





export function Table(props){
    const [data,setData] = useState([
      { id:1, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      { id:2, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      {id:3, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      { id:4, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      {id:5, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      {id:6, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},


])

const [cumulatives,setCumulative]= useState([])
const [aside, setaside]= useState()
const [ask,unask] = useState()
const [color, setcolor] = useState()
const [Bcolor, setBcolor] = useState()
const [runner,Crunner] = useState([
    "blue","green","red", "black","violet"
])
const [main,setmain] = useState()

const buttonRef = useRef()

const CourseChanger=(e,id,fields)=>{
const why = data.map(coursed=>{
if(coursed.id === id ){

return {...coursed, [fields]: e.target.value}
}

 localStorage.setItem("course" + id, e.target.value)

return coursed
})

 
setData(why)

}



const addItem = ()=>{
    const man = {
        id:data.length + 1, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""

    }
   
    console.log(man);

   
   setData([...data , man]) 


    
}



const GradeChanger=(e,id,fields)=>{
        const why = data.map(coursed=>{
        if(coursed.id === id ){
        
        return {...coursed, grade: e.target.value.toUpperCase()}
        }
        
         localStorage.setItem("grade"+ " "+id, e.target.value.toUpperCase())
        
        return coursed
        })
        
         
        setData(why)
        
        
        
}



const CourseUnitChangers = (e, id , field)=>{

    const pave =    data.map(
            calm=>{
if (calm.id === id ){
  return  {...calm,  [field]: e.target.value }

}
localStorage.setItem("course unit"+ " "+id, JSON.stringify(e.target.value))
return calm
            }
        )
        setData(pave)
   
    }
const previousData = ()=>{
    let man = "no localStorage"

    const ump = 
    data.map(

        
        items=>{
   
            const id = items.id
            const courseUnitStorage = localStorage.getItem("course unit"+ " "+id)
            const parsedCourseUnitStorage = courseUnitStorage ? JSON.parse(courseUnitStorage) : ""

           

            if(   localStorage.getItem("course unit"+ " "+id) || localStorage.getItem("grade"+ " "+id) ||  localStorage.getItem("course" + id)
            ){
             
           man = "localStorage"
                items.course = localStorage.getItem("course" + id)
                items.courseUnit = parsedCourseUnitStorage
                items.grade = localStorage.getItem("grade"+ " "+id)

                return items
            }
            else{
                return items

            }
          

                
                }


    )
    if(man == "no localStorage"){
        alert("You have no previous data, try calculating your gp first")

    }

    setData(ump)

}

const chain = ()=>{
  
 setInterval(() => {
    setmain("blue")
    setmain("red")
 }, 100);
 }


let summedUp = []
let summedUnit = []
let gp = []

const SUM =()=>{
    
    data.forEach(
        calm=>{
            
            if(calm.grade == "A"&& calm.courseUnit!==""){
                console.log(5 * parseFloat(calm.courseUnit));
                summedUp.push(5 * parseFloat(calm.courseUnit))

            }
            else if (calm.grade == "B" && calm.courseUnit!==""){
                console.log(4 * parseFloat(calm.courseUnit));
                summedUp.push(4 * parseFloat(calm.courseUnit))

            }
            else if (calm.grade == "C" && calm.courseUnit!==""){
                console.log(3 * parseFloat(calm.courseUnit));
                summedUp.push(3 * parseFloat(calm.courseUnit))
            }
            else if (calm.grade == "D" && calm.courseUnit!==""){
                console.log(2 * parseFloat(calm.courseUnit));
                summedUp.push(2 * parseFloat(calm.courseUnit))
            }
            else if (calm.grade == "E" && calm.courseUnit!==""){
                console.log(1 * parseFloat(calm.courseUnit));
                summedUp.push(1 * parseFloat(calm.courseUnit))
            }
            else if (calm.grade == "F" && calm.courseUnit!==""){
                console.log(0 * parseFloat(calm.courseUnit));
                summedUp.push(0 * parseFloat(calm.courseUnit))
            }
//             else if(calm.grade !=="A"||"B"||"C"||"D"||"E"||"F"){
//                 // <div>"iouiokj</div>
// // alert("enter a valid grade")
// // prompt("hyhy")
//             }

      
      console.log(summedUp);
     if(calm.courseUnit!==""&& calm.courseUnit!==null){
        summedUnit.push(calm.courseUnit)

     }
     
      console.log(summedUnit);

     

            return calm

        }
        )

        const reducer = (accumulator, currentvalue) => parseFloat(accumulator) +  parseFloat(currentvalue)
        const totalCourseUnit =   summedUnit.reduce(reducer)
      const courseUnitProduct = summedUp.reduce(reducer)
        
      alert("your gp is" + " "+ parseFloat(parseFloat(courseUnitProduct)/ parseFloat(totalCourseUnit)).toFixed(2) +"\n"+
      "with a total courseUnit of" + " " + totalCourseUnit +"\n"+ 
      "and a total courseUnit-grade-product of" + " " + courseUnitProduct)


      setCumulative([...cumulatives, parseFloat(parseFloat(courseUnitProduct)/ parseFloat(totalCourseUnit)).toFixed(2)])



      const lock = [...cumulatives, parseFloat(parseFloat(courseUnitProduct)/ parseFloat(totalCourseUnit)).toFixed(2) ]
      localStorage.setItem("cum-loc", lock.join("+").trim() )  
      buttonRef.current.value = localStorage.getItem("cum-loc")
localStorage.setItem("moon", buttonRef.current.value)
      
      
      
      console.log(cumulatives);
      


      summedUnit = []
      summedUp=[]
      gp.push(parseFloat(parseFloat(courseUnitProduct)/ parseFloat(totalCourseUnit)).toFixed(2))
      
      





  
}




const del = ()=>{
    const way = 
    data.map(
        calm=>{
            const id = calm.id
if(calm.id || calm.aggregate || calm.course || calm.grade || calm.courseUnit|| calm.exam){
   

return {...calm, course:"", test:"", exam:"", courseUnit:"", aggregate:"", grade:""}
}
return calm
        }
    )
    setData(way)
}





const cumLoc = (e) =>{
e= e.target.value
}

const cumulativa = ()=>{
//     if(aside.contains("+")){
// alert("wrong")
//     }
    if(cumulatives){
        
        // const reducer = (accumulator, currentvalue) => parseFloat(accumulator)+  parseFloat(currentvalue)
        if(aside){
            const reducer = (accumulator, currentvalue) => parseFloat(accumulator)+  parseFloat(currentvalue)

            const value = parseFloat(parseFloat(cumulatives.reduce(reducer)  ) + parseInt(aside) ).toFixed(2) / parseInt(cumulatives.length+1)
            alert(value)
            console.log(parseFloat(cumulatives.reduce(reducer)  ));

            console.log(parseInt(aside));
            console.log(parseInt(cumulatives.length+1));
        }
        else if (aside==""  || !aside){
            const reducer = (accumulator, currentvalue) => parseFloat(accumulator)+  parseFloat(currentvalue)

            const value = parseFloat(cumulatives.reduce(reducer) / parseInt(cumulatives.length)).toFixed(2)
            alert(value)

        }

}
    else if(!cumulatives){
        alert("fix in some values")
    }
}



const clear =()=>{
// localStorage.rem
setCumulative([])
  buttonRef.current.value = ""
setaside(prev=>prev = "")
localStorage.removeItem("moon")

}





const click=()=>{

    setInterval(() => {
        setTimeout(() => {

            setmain("blue")
        }, 100);

        setTimeout(() => {
            setmain("green")
        }, 700);

        setTimeout(() => {
            setmain("pink")
        }, 900);
    }, 1000);

 
}


useEffect(()=>{
   click()
    




},[])





const changer = ()=>{
    let man = document.querySelector('.van')
    man.style.color = color
    
}

const Bchanger = ()=>{
    let man = document.querySelector('.van')
    man.style.background = Bcolor
    

}

return (
 
  
    <>
    <h1 style={{width:"20em"}}>GP CALCULATOR v1.0</h1>
    <h3 style={{width:"20em"}}>Welcome  @{props.ask}! </h3>
   <div> <h1 style={{marginBottom:"-4px", width:"20em"}}>DESIGN YOUR CALCULATOR </h1> </div> 
<div style={{display:"inline-flex", width:"75em", marginBottom:"20px"}}>
    <div className='Update' style={{ color:main}}> <b>input preferred color to change text color</b> : <input  onChange={e=>setcolor(e.target.value)}/>
 <button style={{background: "lightgreen"}} onClick={changer}><b>UPDATE TEXT COLOR</b></button></div>

<div className='Update' style={{ color:main}}><b>input preferred color to change background color</b>: <input  onChange={e=>setBcolor(e.target.value)}/>
 <button style={{ backgroundColor:'lightgreen'}} onClick={Bchanger}><b>UPDATE BACKGROUND COLOR</b></button>
 </div>
 </div>
 <h1>CALCULATOR</h1>

    <table>
        <thead>
            <tr>
                <th>COURSES</th>
                <th>COURSE UNITS</th>
                <th>GRADE</th>
            </tr>
        </thead>
        <tbody>
            {data.map(items=>{

                return (
                <>
                 <tr key = {items.id}>

<td>
    <input type = "text" value = {items.course}  onChange={e=>CourseChanger(e,items.id,"course")} />
</td>

<td>
    <input type = "text" value={items.courseUnit} onChange={e=>CourseUnitChangers(e,items.id, "courseUnit")}/>
</td>

<td>
    <input type = "text" value={items.grade} onInput={(e)=>e.target.value.toUpperCase()} onChange={e=>GradeChanger(e,items.id, "grade")}/> 
</td>
</tr>

                </>
                
                
                )
                

                }
                


                )
                
                }

        </tbody>

    </table >


    
  <div className="gpButtonDiv" >
  <button className='gpButton' onClick={ addItem}> <b>ADD SOME ROWS</b> </button>
<button className='gpButton'   onClick={previousData}> <b>GET PREVIOUS DATA</b> </button>
<button className='gpButton'  onClick={SUM}> <b>HIT TO GET GP!</b> </button>
<button className='gpButton'   onClick={del}> <b>DELETE ALL</b> </button>


    </div>



    <h1 style={{marginTop:"60px,", width:"20em"}} ><b>CUMULATE YOUR GP</b></h1>

<div className='cumDiv' style={{marginTop:"-3px"}}>
<input  ref={buttonRef} value={localStorage.getItem("moon")} style={{width:"20%"}} readOnly={true} onChange={(e)=>cumLoc(e.target.value)} /> +
<input style={{marginLeft:"10px", marginRight:"10px", width:"30%"}}placeholder="(optional),manually include one value to add to calculated gp value" type={"number"} value = {aside}  onChange={e=>setaside(e.target.value)}/>
<button style={{background: "lightgreen", marginRight:"8px"}} onClick={cumulativa}> <b>CLICK TO CUMULATE GP</b></button>
<button style={{background: "lightgreen"}}  onClick={clear}><b>CLEAR CUMULATIVE</b></button>
</div>


    
    


    </>
)}