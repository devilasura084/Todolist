import React, { useState } from 'react'
import axios from 'axios'
function Create() {
  const [task,setTask]=useState()
  const handleAdd=()=>{
    axios.post('http://localhost:3001/add',{task:task}).then(result=>{location.reload()})
  }
  return (
    <div className='create-form'>
        <input style={{width:500,height:40,fontFamily:"cursive",fontSize:25}} type="text" name="" id=""  placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)}/>
        <button style={{height:45,width:60,color:"white",backgroundColor:"black",fontFamily:"cursive"}} type="button" onClick={handleAdd}>Add</button>
        </div>
  )
}

export default Create