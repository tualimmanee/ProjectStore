import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './LoginForm.css'
import firebase from '../config/firebase'


const LoginPage = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {

        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then((u) => {
            alert("Welcome")
        }).catch((err) => {
            alert("Your password is Invalid")
        })
    }


    const signup = e => {

        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            alert("Successful registration")
        }).catch((err) => {
            alert("This email is already used")
        })
    }


    return (
        <div className="back" >
            <div className="box">
                <MDBContainer >
                    <MDBRow className="LoginForm">
                        <MDBCol md="4" >
                            <MDBCard>
                                <MDBCardBody className="body white rounded">
                                    <form>
                                        <p className="h5 text-center mb-4">Sign in</p>


                                        <div >
                                            <MDBInput className="grey-text" label="Your email" group type="email" validate error="wrong" success="right" name="email" onChange={(e) => setEmail(e.target.value)} />
                                            <MDBInput label="Your password" group type="password" validate onChange={(e) => setPassword(e.target.value)} />
                                        </div>


                                        <div className="text-center">
                                            <MDBBtn color="primary" onClick={login}>LOGIN</MDBBtn>
                                            <MDBBtn color="primary" onClick={signup}>Register</MDBBtn>
                                        </div>

                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

        </div>

    )
}

export default LoginPage;