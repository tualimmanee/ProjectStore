import React from 'react'
import Topbar from './Topbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import './LoginForm.css'


const Home = props => {
 
 

  return (
    <div >
      <Topbar />
      <div  ><img  src="image/WElcome.png" className="pig"/></div>
      
    </div>
  )
}

export default Home;