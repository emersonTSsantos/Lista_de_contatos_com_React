import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BotaoAdicionar from './components/BotaoAdicionar';
import CadastroContato from './pages/CadastroContato';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <SearchBar />
        <BotaoAdicionar />
      </div>
    ),
  },
  {
    path: "/cadastro",
    element: (
      <div>
        <Header />
        <CadastroContato />
      </div>
    )
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
