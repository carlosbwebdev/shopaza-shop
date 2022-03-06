import { Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/productPage';
import Home from './pages/Home';
import Aboutpage from './pages/aboutpage';

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/aboutpage">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
        </Routes>

        <footer>
          <h1>I am the footer</h1>
        </footer>
      </div>
    </>
  );
}

export default App;
