import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';



function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Los mejores productos para el cuidado de tu Piel.-"}/>
      <ItemCount valInicial={1} stock={10}/>
    </div>
  );
}

export default App;
