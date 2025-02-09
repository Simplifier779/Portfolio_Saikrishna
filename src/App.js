import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
/* <> </> - Used to create a Fragment.A Fragment is a special type of component or wrapper provided by React that allows you to group multiple JSX elements together without introducing an additional parent element in the DOM. */

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
