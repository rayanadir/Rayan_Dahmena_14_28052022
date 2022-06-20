import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';

const App = () => {
  return (
    <Routes>
      <Route path='/Rayan_Dahmena_14_28052022' element={<CreateEmployee />} />
      <Route path='/Rayan_Dahmena_14_28052022/employee-list' element={<EmployeeList />} />
    </Routes>
  );
}

export default App;
