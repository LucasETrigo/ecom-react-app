import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CardDetailContainer from "./components/CardDetailContainer/CardDetailContainer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./pages/Details";


/* COMPONENTE PADRE */
function App() {
    return (
        <div className="App">
            
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/home" element={<Home />}></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                    <Route exact path="/products/:id" element={<Details />}></Route>
                </Routes>
            </BrowserRouter>



        {
            /*
                    <div className="contenedor-padre">
                    <CardListContainer />
                    </div>
            */
        }


            {/*<CardDetailContainer /> */}
        </div>
    );
}

export default App;
