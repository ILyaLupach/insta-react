import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';

/* json-server src/posts.json */

function App() {
  return (
    <div className="App">
    <Header />
    <Feed />
    </div>
  );
}

export default App;
