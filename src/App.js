import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './containers/Layout';

function App() {
  return (
    <Router>
      <div id="App">
        <div className='content'>
        <Layout />
        </div>
      </div>
    </Router>
  );
}

export default App;
