import './App.css';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TestScreen from './screens/TestScreen';
import Header from './components/Header';
// import ProductScreen from './screens/ProductScreen';
import ProductDetails from './screens/ProductDetails';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
        <Routes>
                  <Route path='/home' element={<TestScreen/>}/>
                  <Route path='/product/:id' element={<ProductDetails/>}/>
                  <Route path='/about' element={<TestScreen/>}/>
                  <Route path='/' element={<TestScreen/>}/>
                  <Route path='/' element={<TestScreen/>}/>
                  <Route path='/' element={<TestScreen/>}/>
        </Routes>
        <Footer/>

    </BrowserRouter>   
    </div>
  );
}

export default App;
