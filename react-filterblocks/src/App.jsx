import Home from "./Pages/Home/Home";
import Vacansy from "./Pages/Vacansy/Vacansy";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Vacansy />}></Route>
      </Routes>
    </>
  );
}

export default App;
