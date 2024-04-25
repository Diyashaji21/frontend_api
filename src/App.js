import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddPatient, AddTravel } from './components/AddTravel';
import { ViewPatient, ViewTravel } from './components/ViewTravel';
import { Search } from './components/Search';
import { Delete } from './components/Delete';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      {/* <Route path='' element={<Login/>}/> */}
      <Route path='' element={<AddTravel/>}/>
      <Route path='ViewTravel' element={<ViewTravel/>}/>
      <Route path='Search' element={<Search/>}/>
      <Route path='Delete' element={<Delete/>}/>
   
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
