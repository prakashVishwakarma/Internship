// import React from 'react'
import { useState } from "react"

const SendMessages = () => {
    const [value, setValue] = useState("");
    // console.log(value);
    const handleMessages = (e) =>
    { e.preventDefault();
        console.log(value);
        setValue("");
       

    }
  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-8 shadow-lg">
    <form className="containerWrap flex"
    onSubmit={handleMessages}>
    
        <input 
        className="input w-full focus:outline-none bg-gray-100 rounded-r-none" 
        type="text" 
        value={value}
        onChange={(e)=>
        {
            // e.preventDefault;
            setValue(e.target.value);
        }}
        />
        <button 
        className="w-auto bg-gray-500 text-white rounded-r-lg  px-5"
        type="submit">Send</button>
    </form>
    </div>
  )
}

export default SendMessages