import { Route, Routes as RouteWrapper } from "react-router-dom";
import NotFound from "../components/Error/NotFound";
import Adhar from "../components/Adhar";
import Navbar from "../components/Navbar";
import Team from '../components/Team'

function Routes() {
    return (
      <RouteWrapper>
          <Route path="/"  element={<>
            <Navbar />
            <hr />
            <Adhar/>
            <Team />
          </>}/>
          <Route path="*"  element={<NotFound/>}/>
      </RouteWrapper>
    )
  }
  
  export default Routes;
