import React from 'react'
import Employee from './Employee'

function Employeelist() {
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
      <Employee/>
      </tbody>
      </table>

    </div>
  )
}

export default Employeelist
