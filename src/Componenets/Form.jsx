import React from 'react'

function Form() {
  return (
    <Form>
        <FormGroup>
            <Form.Control type="text"
            placeholder="Name *"
            required
            />
            </FormGroup>

            <FormGroup>
            <Form.Control type="email"
            placeholder="Email *"
            required
            />
            </FormGroup>

            <FormGroup>
            <Form.Control as="textarea"
            placeholder="Address *"
            rows={3}
            />
            </FormGroup>

            <FormGroup>
            <Form.Control type="text"
            placeholder="Phone"
            />
        </FormGroup>
        <Button variant="success" type="submit" block>Add New Employee</Button>
      
    </Form>
  )
}

export default Form