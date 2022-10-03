import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './screens/About/About';
import ContactUs from './screens/ContactUs/ContactUs';
import Home from './screens/Home/Home';
import PhotoGallery from "./screens/PhotoGallery/PhotoGallery"
import Menu from './screens/Menu/Menu'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/menu'} element={<Menu/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/photogallery'} element={<PhotoGallery/>}/>
        <Route path={'/contact'} element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
