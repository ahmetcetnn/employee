import './App.css';
import Employeelist from './Componenets/Employeelist';
import EmployeeContextProvider from './Componenets/Context/EmployeeContext';

function App() {
  return (
    <div className="App">
      <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
      <EmployeeContextProvider>
      <Employeelist/>
      </EmployeeContextProvider>
      </div>
      </div>
      </div>
      
     
    </div>
  );
}

export default App;
