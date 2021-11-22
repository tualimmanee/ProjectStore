import React from 'react'
import Topbar from './Topbar';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Warehouse.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { storage } from 'firebase';




const Warehouse = props => {
    const [files, setFiles] = useState();

useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child("gs://preprojeck.appspot.com/images").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();
}, []);



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

            <useState/>
            
        </div >
    </div>

)

}

export default Warehouse;