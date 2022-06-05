import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';
import NotesPage from './routes/NotesPage';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<div></div>} />
        <Route path='/login/' element={<LoginPage />} />
        <Route path='/signup/' element={<SignupPage />} />
        <Route path='/notes/' element={<NotesPage />} />
      </Routes>
    </div>
  );
}

export default App;
