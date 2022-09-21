import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import CountriesTableReact from "./componetsReact/CountriesTableReact";
import EachCountryDetails from "./componetsReact/EachCountryDetails";
import Cart from "./componetsReact/Cart";

function App() {
  
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesTableReact />} />
        <Route path="/detail/:name" element={<EachCountryDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
