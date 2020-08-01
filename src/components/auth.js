import React from 'react';
import { Form, Button } from "bootstrap-4-react";

export default function Auth() {
    return (
        <Form>
          <Form.Group>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <Form.Input
              type="email"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">Password</label>
            <Form.Input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Check>
              <Form.CheckInput type="checkbox" id="exampleCheck1" />
              <Form.CheckLabel htmlFor="exampleCheck1">
                Check me out
              </Form.CheckLabel>
            </Form.Check>
          </Form.Group>
          <div className="btn-container">
          <Button primary type="submit">
            Login
          </Button>
          <Button primary type="submit">
            Create Account
          </Button>
          </div>
        </Form>
    )
}
