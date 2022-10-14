import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Map, Splash, Messages } from "./Pages";
import "./App.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (load) {
      setTimeout(()=>setLoad(!load), 3500);
    }
  }, [load]);

  return load ?(
    <Splash />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
