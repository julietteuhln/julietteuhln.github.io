import './App.css
import { HashRouter } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import Header from './components/Layout/Header';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/julietteuhln.github.io">
        <Header />
          <main>
            <AllRoutes />
          </main>
    </HashRouter>
    </div>
  );
}

export default App;
