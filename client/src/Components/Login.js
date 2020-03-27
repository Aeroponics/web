import React from 'react'
import {
    Form,
    FormGroup,
    Button,
    Label, 
    Input
} from 'reactstrap'

const Login = () => {
    return(
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="emailInput" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="emailInput" placeholder="email" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
  
    )
}

export default Login