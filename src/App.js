import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CommonNft from "./pages/CommonNft";
import HomeBanner from "./pages/HomeBanner/HomeBanner";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import ThemeProvider from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import UseTimeout from "./components/UseTimeout";

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
