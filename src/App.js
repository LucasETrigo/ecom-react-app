import "./App.css";
import "./test.css";
import NavBar from "./components/NavBar/NavBar";
import CardListContainer from "./components/CardListContainer/CardListContainer";
import CardDetailContainer from "./components/CardDetailContainer/CardDetailContainer";

/* COMPONENTE PADRE */
function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="contenedor-padre">
                <CardListContainer />
            </div>
            <CardDetailContainer />
        </div>
    );
}

export default App;
