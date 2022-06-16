//React imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages imports
import CommonNft from "./pages/CommonNft";
import HomeBanner from "./pages/HomeBanner/HomeBanner";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

//Context imports
import ThemeProvider from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

//Components imports
import UseTimeout from "./components/UseTimeout";
import NavBar from "./components/NavBar/NavBar";

//Styles imports
import "./App.css";

/* COMPONENTE PADRE */
function App() {
    UseTimeout(() => console.log("timeout"), 1000);

    return (
        <div className="App">
            <CartProvider>
                <ThemeProvider>
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={<HomeBanner />}
                            ></Route>
                            <Route
                                exact
                                path="/category"
                                element={<CommonNft />}
                            ></Route>
                            <Route
                                exact
                                path="/category/:idCategory"
                                element={<CommonNft />}
                            ></Route>
                            <Route
                                exact
                                path="/contact"
                                element={<Contact />}
                            ></Route>
                            <Route
                                exact
                                path="/products/:id"
                                element={<Details />}
                            ></Route>
                            <Route
                                exact
                                path="/cart"
                                element={<Cart />}
                            ></Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </CartProvider>
        </div>
    );
}

export default App;
