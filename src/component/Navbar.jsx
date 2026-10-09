import react from "react"
import { useState } from "react"
import Dropdown from "./Dropdown"

function Navbar(){
  const [open, setOpen] = useState(false)

  return(
    <div className="w-full h-14 flex justify-between items-center px-6 bg-white  sticky top-0 z-50">

      <h1 className="text-2xl font-bold">pixabay</h1>

      <div className="flex items-center gap-5 text-sm relative">

        
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="border px-3 py-1 rounded-full text-xs">
            Explore {open? "▲" : "▼"}
          </button>

         
          {open && <Dropdown />}
        </div>

        <button>Log in</button>
        <button className="border px-4 py-1 rounded-full">Join</button>
        <button className="bg-[#02be6e] text-white px-4 py-2 rounded-full font-bold">Upload</button>

      </div>
    </div>
  )
}
export default Navbar


























// import React from 'react'

// function Navbar() {
//   return (
//     <div className="w-full h-14 flex justify-between items-center px-6 bg-white">
//       <h1 className=' text-4xl font-mono rounded-2xl p-2'>pixabay</h1>


    
//       <div className="flex items-center gap-5 text-sm">
//       <button className='px-4 py-1 rounded-full'>Explore ▼ </button>
//       <button>Log in</button>
//       <button className='border px-4 py-1 rounded-full'>Join</button>
//       <button className='bg-green-500 text-white px-4 py-2 rounded-full font-bold'>Upload</button>
//       </div>
//       </div>
//   )
// }
// export default Navbar


