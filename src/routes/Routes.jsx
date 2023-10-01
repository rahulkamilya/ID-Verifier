import { Route, Routes as RouteWrapper } from "react-router-dom";
import NotFound from "../components/Error/NotFound";
import Adhar from "../components/Adhar";

function Routes() {
    return (
      <RouteWrapper>
          <Route path="/"  element={<Adhar/>}/>
          <Route path="*"  element={<NotFound/>}/>
      </RouteWrapper>
    )
  }
  
  export default Routes;
