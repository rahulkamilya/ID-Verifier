import notFoundSrc from  '../../assets/notFound.jpg'

export default function NotFound() {
  return (
    <div className="bg-gray-700 h-screen flex justify-center items-center text-white font-bold text-4xl m-auto flex-col">
      <span className="font-bold tracking-wide text-3xl">404 Page Not Found</span>

      <img
        src={notFoundSrc}
        alt="404 : page not found"
        className=' w-80 my-5 rounded-xl' 
      />

      <p className="text-[10px]"><a href="https://www.freepik.com/free-vector/page-found-concept-illustration_7887410.htm#query=404%20page%20found&position=2&from_view=keyword&track=ais">Image by storyset</a> on Freepik</p>
      
    </div>
  )
}
