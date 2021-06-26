import './App.css';
import ProductList from './components/ProductList';
const products = require('./products.json');

function App() {
  return (
    <div className="App">
      <ProductList products={products}/>
    </div>
  );
}

export default App;
