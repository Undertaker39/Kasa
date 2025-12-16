/*import { useState } from "react";*/


function handleClick (e) {
/*    const [Id, SetId]=useState('0')*/
    let id = e.target.parentElement.id;
    console.log(id)
/*    SetId(0)
    console.log(Id)*/
}

export default handleClick


