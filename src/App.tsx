// src/App.tsx
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      {/* Outros componentes e conteúdo */}
    </div>
  );
};

export default App;
