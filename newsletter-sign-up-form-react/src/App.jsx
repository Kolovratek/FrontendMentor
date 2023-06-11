import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignForm from "./components/SignForm";
import SuccessSubscribe from "./components/SuccessSubscribe";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignForm />} />
        <Route path="/success" element={<SuccessSubscribe />} />
      </Routes>
    </Router>
  );
}

export default App;
