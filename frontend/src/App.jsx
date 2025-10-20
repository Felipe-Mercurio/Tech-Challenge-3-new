import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import VehicleList from "./components/VehicleList";
import VehicleForm from "./components/VehicleForm";
import VehicleDetails from "./components/VehicleDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<VehicleList />} />
        <Route path="/add" element={<VehicleForm />} />
        <Route path="/edit/:id" element={<VehicleForm />} />
        <Route path="/details/:id" element={<VehicleDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
