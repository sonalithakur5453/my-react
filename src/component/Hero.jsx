 import { useState } from "react"
 function Hero(){
  const [active, setActive] = useState("Explore")

  const categories = ["Explore","Photos","Illustrations","Vectors","Videos","Music","Sound Effects","3D Models","Gifs"]
  const tags = ["nature","background","wallpaper","sky","money","cat","food","flower","dog","car"]

  return(
    <div className="w-[98%] h-[400px m-6  p-6 rounded-[20px]  overflow-hidden bg-cover bg-center relative flex flex-col justify-center items-center text-white"
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1720380594018-99b809db5d6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D')"}}>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Stunning royalty-free images & royalty-free stock</h1>

        
        <div className="flex gap-2 mb-4">
          {categories.map(cat => (
            <button
                key={cat}
              onClick={()=> setActive(cat)}
              className={`px-3 py-1 rounded-full text-sm ${active===cat? 'bg-white text-black' : 'bg-black/30'}`}>
              {cat}
            </button>
          ))}
        </div>
        

        <div className="w-[750px h-12 bg-white/40 rounded-full flex items-center px-4">
          <span className="text-white/56">🔍</span>
         
          <input
            type="text"
            placeholder="Search for free Images, Videos, Music & more"
            className="flex-1 ml-3 outline-none text-black text-sm"
          />
        </div>

       
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {tags.map(tag => (
            <div key={tag} className="px-3 py-1 bg-white/20 rounded-full text-xs cursor-pointer">
              {tag}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
export default Hero