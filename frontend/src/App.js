import './App.css';
import React from 'react';
import { createContext, useState } from 'react';
import FileForm from '../src/components/FileForm';
import LatestImage from '../src/components/LatestImage';

export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext);
  return (
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
    <div className="App">
      <FileForm />
      <LatestImage /> 
    </div>
    </AppContext.Provider>
  );
}

export default App;
