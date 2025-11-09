import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/layouts/Header';
import MainList from 'views/main/MainList';
import ShopList from 'views/shop/ShopList';
import CartList from 'views/cart/CartList';
import Footer from 'components/layouts/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainList />} />
          <Route path="/shop" element={<ShopList />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

export default App;
