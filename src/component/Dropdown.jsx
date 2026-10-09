
function Dropdown(){
  return(
    <div className="absolute top-10 left-0 w-[350px bg-[#222] text-white rounded-xl p-5 flex justify-between text-xs z-50">

      <div>
        <h4 className="font-bold mb-3 text-gray-400">Community</h4>
        <p className="mb-2 hover:underline cursor-pointer">Contests 🔴LIVE</p>
        <p className="mb-2 hover:underline cursor-pointer">Creators</p>
        <p className="mb-2 hover:underline cursor-pointer">Ambassadors</p>
        <p className="mb-2 hover:underline cursor-pointer">Forum</p>
        <p className="mb-2 hover:underline cursor-pointer">Blog</p>
      </div>

      <div>
        <h4 className="font-bold mb-3 text-gray-400">About</h4>
        <p className="mb-2 hover:underline cursor-pointer">About Us</p>
        <p className="mb-2 hover:underline cursor-pointer">FAQ</p>
        <p className="mb-2 hover:underline cursor-pointer">License Summary</p>
        <p className="mb-2 hover:underline cursor-pointer">Terms of Service</p>
        <p className="mb-2 hover:underline cursor-pointer">Privacy Policy</p>
        <p className="mb-2 hover:underline cursor-pointer">Cookies Policy</p>
        <p className="mb-2 hover:underline cursor-pointer">API</p>
      </div>

    </div>
  )
}
export default Dropdown