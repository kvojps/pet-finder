import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './componentes/paginas/Home'
import Animais from './componentes/paginas/Animais'
import Sobre from './componentes/paginas/Sobre'
import Footer from './componentes/layout/Footer'
import Navbar from './componentes/layout/Navbar'
import Container from './componentes/layout/Container'
import Contato from './componentes/paginas/Contato'
import Login from './componentes/paginas/Login'
import Cadastro from './componentes/paginas/Cadastro'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Container customClass="min-height">
          <Routes>
            <Route exact path = "/" element ={<Home/>}></Route>
            <Route path = "/animais" element ={<Animais/>}></Route>
            <Route path = "/sobre" element ={<Sobre/>}></Route>
            <Route path = "/contato" element ={<Contato/>}></Route>
            <Route path = "/login" element ={<Login/>}></Route>
            <Route path = "/cadastro" element ={<Cadastro/>}></Route>
          </Routes>
        </Container>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
