import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import { useState } from 'react';
import './App.css';

function App() {
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText.length)
  };

  return (
    <div>
      <Header headerExpanded = {headerExpanded} />
      <SearchBox onInputChange = {handleInputChange}/>
    </div>
  );
}

export default App;