import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Blog from "./component/Blog/Blog";
import Dashboard from "./component/Dashboard/Dashboard";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Nav from "./component/Nav/Nav";
import Revews from "./component/Revews/Revews";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Revews></Revews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
