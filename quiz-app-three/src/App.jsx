import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Main from './Component/Main';
import Result from './Component/Result';

function App() {
 

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Main' element={<Main/>}/>
      <Route path='/Result' element={<Result/>}/>
    </Routes>
    
    </div>
  )
}

export default App
