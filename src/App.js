import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import HeadTail from './components/Head'





function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/head-tail" element={<HeadTail />} />
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
