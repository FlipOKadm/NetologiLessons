import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Rating from "./pages/raiting/Rating"
import {Listing} from "./pages/listing/Listing"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/raiting" element={<Rating />}/>
          <Route path="/listing" element={<Listing />}/>
          <Route path="*" element={<Navigate to="/raiting" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
