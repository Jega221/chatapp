import React from 'react';
import ChatAppLanding from './component/CHATAPPLANDING';
import Product from './component/Product';
import Service from './component/Service';
import Footer from './component/Footer';

const App = () => {
  return (
    <main>
      <ChatAppLanding/>
      <Product/>
      <Service/>
      <Footer/>
    </main> 
  )
}

export default App
