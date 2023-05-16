import Inputs from "./components/Inputs/Inputs";
import MainData from "./components/MainData/MainData";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="card">
        <div className="card-div">
          <Inputs />
          <MainData />
        </div>
      </div>
    </div>
  );
}

export default App;
