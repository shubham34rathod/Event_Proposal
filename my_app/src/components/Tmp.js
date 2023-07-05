import React, { useState } from "react";

function Tmp()
{
    let [name,updateName]=useState([])
    let [tmp,setTmp]=useState({
        name:''
    })
    function setA(a)
    {
        setTmp(a)
    }
    function setArray()
    {
        updateName((data)=>([
            ...data,
            tmp
        ]))
        setTmp({
            name:''
        })
        console.log(name);
    }
    
    return <>
       <label htmlFor="name">Enter Name</label>
       <input type="text" value={tmp.name           } onChange={(e)=>setA(e.target.value)}/>
       <button onClick={setArray}>Enter</button>
    </>
}

export default Tmp