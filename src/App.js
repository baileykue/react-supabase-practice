import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [restaurants, setResaurants] = useState([]);

  return (
    <div className="App">
      <h1>Restaurant List</h1>
    </div>
  );
}

export default App;
