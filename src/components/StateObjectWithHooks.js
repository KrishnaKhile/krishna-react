import React, { useState } from 'react'

const StateObjectWithHooks = () => {
    const [data,setData] = useState({name:'krishna',age:23,email:'khile@gmail.com'});
  return (
    <div>
      <input type="text" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
      <input type="text"  value={data.age} onChange={(e)=>{setData({...data,age:e.target.value})}}/>
      <input type="text"  value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <h1>{data.email}</h1>
    </div>
  )
}

export default StateObjectWithHooks
