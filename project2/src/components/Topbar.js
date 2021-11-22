import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../config/firebase'



import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'


const Topbar = () => {

    const logout = () => {

        firebase.auth().signOut();
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Order">Order</Nav.Link>
                    <Nav.Link href="/Warehouse">Warehouse</Nav.Link>
                    <Nav.Link href="/Upload">Upload</Nav.Link>
                    <Nav.Link href="/InStorePage">InStorePage</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={logout}>Logout</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Topbar