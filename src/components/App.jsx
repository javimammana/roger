import './App.css';
import 'react-toastify/dist/ReactToastify.css';

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';

//Firebase
import { getProductos } from '../utils/firebase';

//Toastify
import { ToastContainer } from 'react-toastify';

//Componenetes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Checkout from './Checkout/Checkout';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Contacto from './Contacto/Contacto';
import Articulos from './Articulos/Articulos';
import Nosotros from './Nosotros/Nosotros';






function App() {

  getProductos()

  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <CarritoProvider>
            <Navbar/>
            <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/productos' element = {<ItemListContainer/>}/>
              <Route path='/category/:idCategoria' element = {<ItemListContainer/>}/>
              <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
              <Route path='/checkout' element = {<Checkout/>}/>
              <Route path='/cart' element = {<Cart/>}/>
              <Route path='/contacto' element = {<Contacto/>}/>
              <Route path='/articulos' element = {<Articulos/>}/>
              <Route path='/nosotros' element = {<Nosotros/>}/>
            </Routes>
            <Footer/>
            <ToastContainer theme="dark"/>
          </CarritoProvider>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
