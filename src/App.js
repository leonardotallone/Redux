
import { BrowserRouter, Routes, Route } from "react-router-dom";
import A_Component from "./components/A_Component";
import B_Component from "./components/B_Component";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<A_Component />} />
        <Route path="/b_component" element={<B_Component />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
