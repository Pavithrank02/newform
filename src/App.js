
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import Contact from './pages/Contact';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <Grid>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/post' element={ <Posts />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/postDetails' element={ <PostDetails />}/>
      </Routes>
    </Grid>
  );
}

export default App;
