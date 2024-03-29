import React from 'react'
import Employee from './Employee'
import { useContext,useState } from 'react'
import { EmployeeContext } from './Context/EmployeeContext'
import { Button, Modal } from 'react-bootstrap'
import AddForm from "../Componenets/AddForm"
function Employeelist() {

    const employees = useContext(EmployeeContext)

    const [show,setShow]=useState(false)

      const  handleClose= () =>setShow(false);
      const  handleShow = () =>setShow(true)

  return (

<>
            <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>					
                </div>
            </div>

        </div>
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
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close Page</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default Employeelist
