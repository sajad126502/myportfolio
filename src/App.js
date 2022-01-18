import { Navbar } from './components/navbar/Navbar';
import './App.css';
import { Home } from './components/home/Home';
import { Profile } from './components/profile/Profile';
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Home></Home>
<Profile></Profile>
      </BrowserRouter>
    </div>
  );
}

export default App;
