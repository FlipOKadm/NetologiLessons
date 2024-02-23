import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Rating from "./pages/raiting/Rating"
import Lists from "./pages/lists/Lists"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/raiting" element={<Rating />}/>
          <Route path="/list" element={<Lists />}/>
          <Route path="*" element={<Navigate to="/raiting" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
