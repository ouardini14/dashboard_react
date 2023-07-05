import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-[100vh]  font-avenir bg-[#FAFAFA]">
        <Routes>
          <Route path="/" element={<Home />} />


        </Routes></div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
