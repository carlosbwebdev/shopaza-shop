import { Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/productPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>

        <footer>
          <h1>Made by Carlos Barros</h1>
        </footer>
      </div>
    </>
  );
}

export default App;
