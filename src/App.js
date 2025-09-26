
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentA from "./components/A_Component";
import ComponentB from "./components/B_Component";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/b_component" element={<ComponentB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
