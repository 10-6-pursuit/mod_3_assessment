import "./App.css";
import Animes from "./Components/Animes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewAnime from "./Components/NewAnime";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Animes/>}/>
          <Route path='animes/new' element={<NewAnime/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
