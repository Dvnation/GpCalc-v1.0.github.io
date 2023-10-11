

export function HowTo() {
    return(
        <>
        <div style={{width:"37em"}}>

        
        <h1 style={{width:"14em"}}>USING THE GP-CALCULATOR</h1>
        <h3 >A. BUTTONS</h3>
        <h4 >1.  <button style={{background: "lightgreen"}} >UPDATE TEXT COLOR</button> : After inputing your preferred color in the input field, click this button to enact the effect </h4>
        <h4>2. <button style={{ backgroundColor:'lightgreen'}} >UPDATE BACKGROUND COLOR</button> : After inputing your preferred Background color in the input field, click this button to enact the effect  </h4>
        <h4>3. <button className='gpButton' style={{marginRight:"5px"}} > ADD SOME ROWS</button> : In need of more rows to inout scores?, click this button to increase number of rows</h4>
        <h4 >4.<button className='gpButton' style={{marginRight:"5px"}} >GET PREVIOUS DATA</button> : This is used to retrieve your previously inputted values even after pressing the delete all button, or after you have refreshed your browser page. Mind you, this will only work after you have calculated your gp at least once</h4>
        <h4>5. <button className='gpButton' style={{marginRight:"5px"}}>HIT TO GET GP!</button> : This is used to obtain your gp after inputting your values appropriately</h4>
        <h4>6. <button className='gpButton' style={{marginRight:"5px"}}  >DELETE ALL</button> : This is used to clear all input fields to input new values </h4>
        <h4>7. <button style={{background: "lightgreen", marginRight:"8px"}} > CLICK TO CUMULATE GP</button> : This is used to give a cumulated value of all gp obtained</h4>
        <h4>8. <button style={{background: "lightgreen"}}  >CLEAR CUMULATIVE</button> : This is used to clear the input field of previously obtained gp scores, and previously cumulated gp values </h4>

        <h3>B. INPUT FIELDS</h3>
        <h4>1. input field to update text color: This receives text values to change the text color. Note: texts should be in lowerCases</h4>
        <h4>2. input field to update background color: This receives text values to change the background color. Note: texts should be in lowerCases </h4>
        <h4>3. Input field to cumulate gp: They are two, field 1(on the left) and field 2 (on the right)</h4>
        <h4>field 1: This automatically receives the value of your gp after hitting the Hit to get gp button. Note: it cannot be edited</h4>
        <h4>field 2: This is used to manually recieve values inputted by the user. Note: This field is optional(i.e. it can be left empty) and can only receive a single value(not a single number, but a single value which may be a decimal or an integer)</h4>
       
        </div>
        </>

    )
}