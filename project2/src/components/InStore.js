import React, { Component } from 'react';
import firebase from '../config/firebase'

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './InStore.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class InStore extends Component {
  
  
  constructor() {
    super();
    this.state = {
      itemsStore: [],
      item_id: '',
      Value: '',
      myOrder: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('itemsStore');
    itemsRef.on('value', (snapshot) => {
      let itemsStore = snapshot.val();
      let newState = [];
      for (let item in itemsStore) {
        newState.push({
          item_id: item,
          mycar: itemsStore[item].myOrder,
          description: itemsStore[item].Value
        })
      }
      this.setState({
        itemsStore: newState
      })
    })

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUpdate = (item_id = null, myOrder = null, Value = null) => {
    this.setState({ item_id, myOrder, Value })

  }

  updateItem() {

    var obj = { myOrder: this.state.myOrder, Value: this.state.Value }

    const itemsRef = firebase.database().ref('/itemsStore')

    itemsRef.child(this.state.item_id).update(obj);

    this.setState({
      item_id: '',
      myOrder: this.state.myOrder,
      Value: ''
    })

  }

  removeItem(itemId) {
    const itemsRef = firebase.database().ref('/itemsStore');
    itemsRef.child(itemId).remove();
  }


  handleSubmit(e) {
    e.preventDefault();

    if (this.state.item_id != '') {
      return this.updateItem();

    }

    const itemsRef = firebase.database().ref('itemsStore')
    const item = {
      myOrder: this.state.myOrder,
      Value: this.state.Value
    }
    itemsRef.push(item)
    this.setState({
      item_id: '',
      myOrder: this.state.myOrder,
      Value: '',

    })
    alert("Saved");
  }


  handleUpdate = (item_id = null, myOrder = null, Value = null) => {
    this.setState({ item_id, myOrder, Value })
  }

  updateItem() {

    var obj = { myOrder: this.state.myOrder, Value: this.state.Value }

    const itemsRef = firebase.database().ref('/itemsStore')

    itemsRef.child(this.state.item_id).update(obj);

    this.setState({
      item_id: '',
      myOrder: this.state.myOrder,
      Value: ''
    })

  }

  removeItem(itemId) {
    const itemsRef = firebase.database().ref('/itemsStore');
    itemsRef.child(itemId).remove();
  }

  render() {
    return (
      <div className="app">
        <nav className="body white rounded">
          <div >
            <MDBCard>
              <MDBCardBody className="body white rounded">
                <form>
                  <span class="navbar-brand mb-1 h1">In Store</span>
                </form>
              </MDBCardBody>
            </MDBCard>
          </div>
        </nav>
        <div className="container" style={{ marginTop: 70 }}  >
          <form onSubmit={this.handleSubmit}>
            <div className="row" >
              <div className="col-10">
                <div className="form-row" >
                  <div className="col-6">
                  
                    <select type="text" name="myOrder" className="form-control" onChange={this.handleChange} value={this.state.myOrder} >
                      
                      <option value="- เลือกอุปกรณ์ -">- เลือกอุปกรณ์ -</option>
                      <option value="ทรายหยาบ (1Q)">ทรายหยาบ (1Q)</option>
                      <option value="ปูนกระสอบ (50กก)">ปูนกระสอบ (50กก)</option>
                      <option value="เหล็กเส้น 6 มม x 10 เมตร (1เส้น)">เหล็กเส้น 6 มม x 10 เมตร (1เส้น)</option>
                      <option value="เหล็กเส้น 9 มม x 10 เมตร (1เส้น)">เหล็กเส้น 9 มม x 10 เมตร (1เส้น)</option>
                      <option value="เหล็กเส้น 12 มม x 10 เมตร (1เส้น)">เหล็กเส้น 12 มม x 10 เมตร (1เส้น)</option>
                      <option value="เหล็กเส้น 20 มม x 10 เมตร (1เส้น)">เหล็กเส้น 20 มม x 10 เมตร (1เส้น)</option>
                      <option value="ตะปูตอกไม้ (1กล่อง)">ตะปูตอกไม้ (1กล่อง)</option>
                      <option value="ลวดม้วน (1กิโลกรัม)">ลวดม้วน (1กิโลกรัม)</option>
                      <option value="แผ่นพื้นคอนกรีตสำเร็จรูป 35 ซม.(1แผ่น)">แผ่นพื้นคอนกรีตสำเร็จรูป 35 ซม.(1แผ่น)</option>
                      <option value="หิน เบอร์ 1(1Q)">หิน เบอร์ 1(1Q)</option>
                      <option value="ปูนกาว 20 กก.(1ถุง)">ปูนกาว 20 กก. (1ถุง)</option>
                      <option value="สายไฟ 50 เมตร (1เส้น)">สายไฟ 50 เมตร (1เส้น)</option>
                      <option value="ลวด C line 3 เมตร 1 (ม้วน)">ลวด C line 3 เมตร 1 (ม้วน)</option>
                      <option value="ตะปูเกลียว (1กล่อง)">ตะปูเกลียว (1กล่อง)</option>
                      <option value="ตะขอ ป.ปลา (1กล่อง)">ตะขอ ป.ปลา (1กล่อง)</option>
                      <option value="พุก 1ต่อ4นิ้ว (1กล่อง)">พุก 1ต่อ4นิ้ว (1กล่อง)</option>
                      
                    </select>
                  
                  </div>
                  <div className="col-2">
                    <input type="text" name="Value" className="form-control" placeholder="Value" onChange={this.handleChange} value={this.state.Value} />
                  </div>
                  <div  >
                    <button class="btn btn-primary"> Save</button>
                  </div>

                </div>
              </div>
            </div>
          </form>

          <hr />
         
           
            {
              this.state.itemsStore.map((item) => {
                return (
                // <td classname = "grid">
                //     <MDBContainer >
                //     <MDBCard>
                //     <td> {item.mycar }</td>
                //     <td> คงเหลือ {item.description}</td>
                //     <tr className="tableUnder" >
                //         <td ><button className="botton" onClick={() => this.handleUpdate(item.item_id, item.myOrder, item.Value)}>Edit</button></td>
                //         <td ><button className="botton" onClick={() => this.removeItem(item.item_id)}>Delete</button></td>
                //     </tr>
                //     </MDBCard>
                //     </MDBContainer>
                    
                // </td> 
              
                  
                <Card bg = "dark" text ="white"  style={{ width: '18rem' }} >
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                <Card.Body>
                    <Card.Title  >{item.mycar }</Card.Title>
                    <Card.Text  >
                    คงเหลือ {item.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.handleUpdate(item.item_id, item.myOrder, item.Value)} >Edit</Button>
                    <Button variant="danger" onClick={() => this.removeItem(item.item_id)} >Delete</Button>
                        
                </Card.Body>
                </Card>
               
               

                          
                )
              })
            }
         
        </div>
      </div>
    );
  }
}
export default InStore;