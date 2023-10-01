import React from "react"
import { Link } from "react-router-dom"
import Astronaut from "../assets/astronaut.svg"
import Planet from "../assets/planet.svg"
function ErrorPage() {
  return (
    <>
      <div className="permission_denied" style={{ height: "100vh" }}>
        <div id="tsparticles"></div>
        <div className="denied__wrapper">
          <h1>404</h1>
          <h3>
            LOST IN <span>SPACE</span> AADHAR-ID Verifier? Hmm, looks like that
            page doesn't exist.
          </h3>
          <img id="astronaut" src={Astronaut} />
          <img id="planet" src={Planet} />
          <Link to="/">
            <button className="denied__link">Go Home</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
