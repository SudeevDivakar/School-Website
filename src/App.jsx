import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Academics from "./Pages/Academics/Academics";
import Faculty from "./Pages/Faculty/Faculty";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/academics" element={<Academics />}></Route>
      <Route path="/faculty" element={<Faculty />}></Route>
    </Routes>
  );
}

export default App;
