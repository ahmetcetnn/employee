import './App.css';
import Employeelist from './Componenets/Employeelist';
import EmployeeContextProvider from './Componenets/Context/EmployeeContext';

function App() {
  return (
    <div className="App">
      <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Employees</b></h2>
					</div>
					<div className="col-sm-6">
						<a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>					
					</div>
				</div>
        
			</div>
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
