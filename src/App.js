import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add_data from './Components/Add_data';
import { Route, Routes } from 'react-router-dom';
import Add_Stud from './Components/Add_Stud';
import Header from './Components/Header';
import View_date from './Components/View_date';

function App() {
  return (
    <>
      {/* <Add_data/> */}
      <Header/>
      <Routes>
        <Route  path='/addbook' element={<Add_data/>}/>
        <Route path='/' element={<Add_Stud/>}/>
        <Route path='/view' element={<View_date/>}/>
      </Routes>
    </>
  );
}

export default App;
