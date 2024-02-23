import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Rating from "./pages/rating/Rating"
import {Listing} from "./pages/listing/Listing"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/rating" element={<Rating />}/>
          <Route path="/listing" element={<Listing />}/>
          <Route path="*" element={<Navigate to="/rating" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
