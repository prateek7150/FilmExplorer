import "./App.css";
import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
         <Route path="/movie/:id" element={<MovieDetail/>}></Route>
      </Routes>
    </Router>
    
    
  );
}

export default App;
