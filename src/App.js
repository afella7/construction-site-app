import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='services' element={<Services />}></Route>
      <Route path='projects' element={<Projects />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
    </>
  );
}

export default App;
