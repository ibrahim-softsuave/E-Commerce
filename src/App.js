import './App.css';
import Navbar from './components/Navbar';
import ExploreAll from './components/Explore_all';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/explore-all' element={<ExploreAll /> } ></Route>
      <Route path={'/explore-all/:id'} element={<ProductDetails/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
