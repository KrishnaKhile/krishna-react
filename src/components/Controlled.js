import React, { useState } from 'react'

const Controlled = () => {
    const [val,setVal]=useState(123)
  return (
    <>
      <div>
        <input type="number" value={val} onChange={(e)=>setVal(e.target.value)} />
        <h1>
            {val}
        </h1>
      </div>
    </>
  )
}

export default Controlled
