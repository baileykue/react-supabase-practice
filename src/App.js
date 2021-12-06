import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getRestaurants } from './services/restaurants';

function App() {
  const [restaurants, setResaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //important to await this data because when we get the data is it coming from an async function
      const data = await getRestaurants();
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Restaurant List</h1>
    </div>
  );
}

export default App;
