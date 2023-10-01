import "./index.css"
import Navbar from "./components/Navbar"
import Adhar from "./components/Adhar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/404"
function App() {
  const Layout = () => (
    <>
      <div className="bg-gray-900 h-screen">
        <Navbar />
        <hr />
        <Adhar />
      </div>
    </>
  )
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
