import { BrowserRouter, Route, Routes } from "react-router-dom";
import Celebirity from "./pages/Celebirity";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import Header from "./Components/Header/Header";
import Login from "./Components/Login";
function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header/>
        <Routes>
					
          <Route path="/celebirity" element={<Celebirity/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/error" element={<NotFound/>} />
          <Route path="/tv" element={<Tv/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;