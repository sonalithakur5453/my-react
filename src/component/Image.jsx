import { useState, useEffect } from "react"

function Image(){
  const [filter, setFilter] = useState("All")
  const [images, setImages] = useState([])

  const allImages = [
    {id:1, cat:"All", url:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGNoaW5lc2UlMjBoZCUyMHBpY3N8ZW58MHx8MHx8fDA%3D"},
    {id:2, cat:"Photos", url:"https://images.unsplash.com/photo-1615789591457-74a63395c990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0JTIwY3V0ZXN0JTIwcGljc3xlbnwwfHwwfHx8MA%3D%3D"},
    {id:3, cat:"Illustrations", url:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=600"},
    {id:4, cat:"Vectors", url:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&w=600"},
     {id:5, cat:"Selectors", url:"https://images.unsplash.com/photo-1571247249406-5045a0ae6bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sb3JmdWwlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D"},
     {id:6, cat:"Vectory", url:"https://images.unsplash.com/photo-1615046526364-ccfd92cd45bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbG9yZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww"},
  ]

  useEffect(()=>{
    if(filter==="All"){
      setImages(allImages)
    } else {
      setImages(allImages.filter(img => img.cat===filter))
    }
  }, [filter])

  return(
    <div className="p-6">
      <div className="flex gap-3 mb-5">
        <button onClick={()=>setFilter("All")} className="border px-4 py-1 rounded-full text-sm">All</button>
        <button onClick={()=>setFilter("Photos")} className="border px-4 py-1 rounded-full text-sm">Photos</button>
        <button onClick={()=>setFilter("Illustrations")} className="border px-4 py-1 rounded-full text-sm">Illustrations</button>
        <button onClick={()=>setFilter("Vectors")} className="border px-4 py-1 rounded-full text-sm">Vectors</button>
         <button onClick={()=>setFilter("Selectors")} className="border px-4 py-1 rounded-full text-sm">Selectors</button>
          <button onClick={()=>setFilter("Vectory")} className="border px-4 py-1 rounded-full text-sm">Vectory</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map(img => (
          <div key={img.id} className="h-min-[250px] rounded-xl overflow-hidden">
            <img src={img.url} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Image