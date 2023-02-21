import React from 'react'
import Employee from './Employee'
import { useContext } from 'react'
import { EmployeeContext } from './Context/EmployeeContext'

function Employeelist() {

    const employees = useContext(EmployeeContext)




  return (
    <div>
        <table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
                <tbody>
      <Employee employees={employees}/>
      </tbody>
      </table>

    </div>
  )
}

export default Employeelist
