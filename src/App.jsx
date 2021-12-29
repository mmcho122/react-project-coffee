import './App.css';

// components -> 임포트할게 많으니 분리
import CoffeeFooter from './components/CoffeeFooter';
import CoffeeHeader from './components/CoffeeHeader';
import CoffeeMain from './components/CoffeeMain';

function App() {
  return (
    <div className="App">
      <CoffeeHeader />
      <CoffeeMain />
      <CoffeeFooter />
    </div>
  );
}

export default App;
