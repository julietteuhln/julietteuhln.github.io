import './App.css
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import Header from './components/Layout/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/julietteuhln.github.io">
        <Header />
          <main>
            <AllRoutes />
          </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
