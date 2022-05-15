import './App.css';
import './test.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

/* COMPONENTE PADRE */
function App() {
  return (

    <div className="App">
      <NavBar />

      <div className='contenedor-padre'>
        <ItemListContainer />
      </div>


    </div>

  );
}

export default App;



