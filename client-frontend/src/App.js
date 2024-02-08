import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Removed Link since it's not used for routing

import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen />} /> {/* Changed 'component' to 'element' */}
          <Route path='/register' element={<Registerscreen />} /> {/* Changed 'Component' to 'element' */}
          <Route path='/login' element={<Loginscreen />} /> {/* Changed 'Component' to 'element' */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
