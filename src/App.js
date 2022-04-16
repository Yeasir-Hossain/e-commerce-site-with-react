import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Routes, Route } from "react-router-dom";
import Order from './Components/Orders/Order';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Requireauth from './Components/Requireauth/Requireauth';
import Shipment from './Components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Order></Order>}></Route>
        <Route path='/inventory' element={
          <Requireauth>
            <Inventory></Inventory>
          </Requireauth>
        }></Route>
        <Route path='/shipment' element={
          <Requireauth>
            <Shipment></Shipment>
          </Requireauth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
