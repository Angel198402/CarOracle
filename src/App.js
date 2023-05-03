import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./Pages/Landing";
import VehiclePurchasing from "./Pages/VehiclePurchasing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/VehiclePurchasing" element={<VehiclePurchasing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
