
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/nav/Header';

import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import Login from './components/login/Login';
import Home from './components/home/Home'
function App() {
  return (
    <Container >

      <Header />

      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

    </Container>
  );
}

export default App;
