import React from 'react'
import Topbar from './Topbar';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InStore from './InStore'

function InStorePage (props) {

    return (
        <div className="back">
          <Topbar />
          <div  >
            <InStore />;
          </div>
    
        </div>
      )

}


export default InStorePage;