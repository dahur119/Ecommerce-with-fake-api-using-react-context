import Layout from "./components/Layout";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";



function App() {
  return (
    <div className="overflow:hidden" >
      
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Sidebar/> 
    <Footer/>


      </Router>
   



      
    </div>
  );
}

export default App;
