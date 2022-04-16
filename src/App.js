import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
     <Routes>
     <Route path="/" element={<Main /> }></Route>
     <Route path="/blog" element={<Blog /> }></Route>
     <Route path="/login" element={<Login /> }></Route>
     <Route path="/signup" element={<SignUp /> }></Route>
     </Routes>
    </div>
  );
}

export default App;
