import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';

const App = ()  => {
  return (
    <body>
      <Routes>
        <Route path='/' element={<CreateEmployee />}/>
        <Route path='/employee-list' element={<EmployeeList />}/>
      </Routes>
    </body>
  );
}

export default App;
