import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {Routes,Route} from "react-router-dom";
import Order from './Components/Orders/Order';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<Order></Order>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
