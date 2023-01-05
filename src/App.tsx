import { AppRoutes } from './components/AppRoutes';

import { Header } from './components/Layout/Header';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
