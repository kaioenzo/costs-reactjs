import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import NovoProjeto from './components/pages/NovoProjeto';
import Sobre from './components/pages/Sobre';
import Projetos from './components/pages/Projetos';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min_height">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/novoprojeto' element={<NovoProjeto/>}/>
        <Route path='/Projetos' element={<Projetos/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
