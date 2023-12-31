import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Reservation from "./components/pages/Reservation";
import About from "./components/About";
import Nav from "./components/pages/Nav";
import Menu from "./components/pages/Menu";
import OrderOnline from "./components/pages/OrderOnline"
import Login from "./components/pages/Login";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={< Login />} />
        
      </Routes>
    </div>
  );
}

export default App;
