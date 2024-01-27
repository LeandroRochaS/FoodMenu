import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/menu"} element={<Menu />}></Route>
        <Route path={"/sobre"} element={<AboutUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
