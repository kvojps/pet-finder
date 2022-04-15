import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './componentes/paginas/Home'
import Animais from './componentes/paginas/Animais'
import Navbar from './componentes/layout/Navbar'
import Container from './componentes/layout/Container'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Container>
          <Routes>
            <Route exact path = "/" element ={<Home/>}></Route>
            <Route exact path = "/animais" element ={<Animais/>}></Route>
          </Routes>
        </Container>


      </Router>
    </div>
  );
}

export default App;
