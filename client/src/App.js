
// import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import { Signin } from './pages/Signin/Signin';
import Footer from './components/Footer/Footer';
import Header from './components/Hedear/Header';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/signup' element={<Signin/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
