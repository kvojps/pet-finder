import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './componentes/paginas/Home'
import Animais from './componentes/paginas/Animais'
import Sobre from './componentes/paginas/Sobre'
import Footer from './componentes/layout/Footer'
import Navbar from './componentes/layout/Navbar'
import Container from './componentes/layout/Container'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Container customClass="min-height">
          <Routes>
            <Route exact path = "/" element ={<Home/>}></Route>
            <Route exact path = "/animais" element ={<Animais/>}></Route>
            <Route exact path = "/sobre" element ={<Sobre/>}></Route>
          </Routes>
        </Container>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
