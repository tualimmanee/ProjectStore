import React from 'react'
import Topbar from './Topbar';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Warehouse.css'
import AppImage from './Warehouse01'


    



const Warehouse = props => {
 return (

    <div className="app">
        <Topbar />
        <div className="background" >
            <MDBCard>
                <MDBCardBody className="body white rounded">
                    <form>
                        <span class="navbar-brand mb-1 h1">Warehouse</span>
                    </form>
                </MDBCardBody>
               
            </MDBCard>
            <AppImage />
        </div >
    </div>

)

}

export default Warehouse;