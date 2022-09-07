import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';
import NotesPage from './routes/NotesPage';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import MainPage from './routes/MainPage';

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return !token ? (
    <div className='App'>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route
          path='/login/'
          element={<LoginPage token={token} setToken={setToken} />}
        />
        <Route path='/signup/' element={<SignupPage />} />
        <Route path='*' element={<LoginPage setToken={setToken} />} />
      </Routes>
    </div>
  ) : (
    <div className='App'>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route
          path='/login/'
          element={<LoginPage token={token} setToken={setToken} />}
        />
        <Route path='/signup/' element={<SignupPage />} />
        <Route path='/notes/' element={<NotesPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
