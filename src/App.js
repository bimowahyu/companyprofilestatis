import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexUtama } from "./componen/IndexUtama";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path ="/" element={<IndexUtama />} />
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
