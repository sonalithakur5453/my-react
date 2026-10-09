function Footer(){
  return(
    <div className="w-full bg-white border-t mt-10 px-8 py-10">
      <div className="flex justify-between">

       
        <div className="w-max-[300px]">
          <h1 className="text-2xl font-bold">pixabay</h1>
          <p className="text-xs text-black/600 mt-2 leading-4">
            Over 6.3 million+ high quality stock images, videos and music shared by our talented community.
          </p>
          <div className="flex gap-3 mt-4 text-black-600 text-sm">
            <span>©</span>
            <span>◎</span>
            <span>▶</span>
            <span>▭</span>
            <span>◉</span>
            <span></span>
          </div>
        </div>

       
        <div className="flex gap-16 text-xs text-gray-600">
          <div>
            <h3 className="font-bold text-black mb-3">Discover</h3>
            <p className="mb-2">Editor's Choice</p>
            <p className="mb-2">Curated Collections</p>
            <p className="mb-2">Pixabay Radio</p>
            <p className="mb-2">Popular Images</p>
            <p className="mb-2">Popular Videos</p>
            <p className="mb-2">Popular Music</p>
            <p className="mb-2">Popular Searches</p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">Community</h3>
            <p className="mb-2">Contests  <button> 🔴LIVE</button></p>
            <p className="mb-2">Creators</p>
            <p className="mb-2">Ambassadors</p>
            <p className="mb-2">Forum</p>
            <p className="mb-2">Blog</p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-3">About</h3>
            <p className="mb-2">About Us</p>
            <p className="mb-2">FAQ</p>
            <p className="mb-2">License Summary</p>
            <p className="mb-2">Terms of Service</p>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Cookies Policy</p>
            <p className="mb-2">Digital Services Act</p>
            <p className="mb-2">Report Content</p>
            <p className="mb-2">API</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer