import React from 'react';
import Header from './components/Header';
import Search from './components/Search';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-5">
        <h2 className="text-xl font-semibold">Welcome to Git Cheat!</h2>
        <p>Start exploring Git commands and tips.</p>
      </main>

      <Search />
    </div>
  );
};

export default App;
