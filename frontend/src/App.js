import "./App.css";
import Animes from "./Components/Animes";

const API = process.env.REACT_APP_API_URL;

function App() {
  console.log(API)
  return (
    <div className="App">
      <Animes />
    </div>
  );
}

export default App;
