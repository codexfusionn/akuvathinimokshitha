import {BrowserRouter,Route,Routes} from "react-router-dom"

import Navbar from "./components/navbar";
import Aboutus from "./pages/About Us";
import Categories from "./pages/categories";
import Clients from "./pages/clients";
import Contactus from "./pages/contact us";
import Services from "./pages/services";
import Home from "./pages/Home";
import Footercomponenet from "./components/Footercomponenet";

export default function App(){
  return(
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="Home" element={<Home/>}/>
     <Route path="About Us" element={<Aboutus/>}/>
     <Route path="categories" element={<Categories/>}/>
    <Route path="clients" element={<Clients/>}/>
    <Route path="contact Us" element={<Contactus/>}/>
    <Route path="services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
    <Footercomponenet/>
    </>
  )
}