import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductProvider from './context/productContext';
import SidebarProvider from './context/SidebarContext';
import CartProvider from './context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ProductProvider>
    <CartProvider>
    <SidebarProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>

    </SidebarProvider>

    </CartProvider>
    
     


  </ProductProvider>

   


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
