import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<div></div>} />
        <Route path='/login/' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
