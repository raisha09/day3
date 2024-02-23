import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Add from './components/Add';
import Login from './components/Login';
import { Route,Routes } from 'react-router-dom';

import View from './components/View';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      {/* <Add/>
      <Login/>
      <Veiw/> */}

      <Routes>
        <Route path="/Add" element={<Add method="post" data={{id: '0', name: '', age:'', department: ''}}/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/View" element={<View/>}></Route>
        </Routes> 
    </div>
  );
}

export default App;
