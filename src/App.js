import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { useEffect } from "react";
import { getUser } from "./redux/action/auth";
import { useDispatch, useSelector } from "react-redux";

function App() {

const dispatch = useDispatch()

  const auth = useSelector(state => state.authReducer)
  console.log(auth)

 useEffect(() => {
  dispatch(getUser());
  console.log()
 }, [dispatch]);

  return (
    <div className="App bg-[#F5F5F5]">
      
      <Router>
        <AllRoutes />
      </Router>
     
    </div>
  );
}

export default App;