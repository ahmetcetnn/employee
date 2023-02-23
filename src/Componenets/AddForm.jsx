import React from 'react'
import {Form,Button,FormGroup} from "react-bootstrap"
import { EmployeeContext } from './Context/EmployeeContext';
import { useContext,useState } from 'react';


function AddForm() {
  const {addEmployee} =useContext(EmployeeContext);
  const [name,setName] =useState([])
  const [email,setEmail] =useState([])
  const [address,setAddress] =useState([])
  const [phone,setPhone] =useState([])






  
  return (
    <Form>
        <FormGroup>
            <Form.Control type="text"
            placeholder="Name *"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            />
            </FormGroup>

            <FormGroup>
            <Form.Control type="email"
            placeholder="Email *"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            />
            </FormGroup>

            <FormGroup>
            <Form.Control as="textarea"
            placeholder="Address *"
            value={address}
            onChange={e => setAddress(e.target.value)}
            rows={3}
            />
            </FormGroup>

            <FormGroup>
            <Form.Control type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            placeholder="Phone"
            />
        </FormGroup>
        <Button variant="success" type="submit" block>Add New Employee</Button>
      
    </Form>
  )
}

export default  AddForm;
