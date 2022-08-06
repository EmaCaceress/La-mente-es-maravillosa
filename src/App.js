import './App.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import IndexComp from './components/IndexComp';
import NavBar from './components/NavBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import AccordionContainerFaq from './components/AccordionContainerFaq';
import FormContainer from './components/FormContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/> 
          <Aside/>
        </header>
        <Routes>
          <Route path="/" element={<IndexComp/>}/>
          <Route path="/FAQ" element={<AccordionContainerFaq/>}/>
          <Route path="/contact" element={<FormContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
