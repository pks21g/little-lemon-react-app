import { Fragment } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      <Hero />
    </Fragment>
  );
}

export default App;
