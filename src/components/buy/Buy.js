
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './buy.css';

const Buy=()=>{

    const [value, onChange] = useState(new Date());
    
return(
<>
<div>

<form className='propdet3'>
     
      <Row className='wsx'>
        <Col><h6 className='edc'>600 Sqft</h6><div>
            <input type="number" placeholder='Plot Area' name='plotArea'></input></div></Col>
        <Col><h6>1450 </h6><div><label>per sq.ft</label></div></Col>
        <Col><h6>8.7 lac</h6><div>Price</div></Col>
      </Row>
      </form>




</div>
<form className="propdet">
            <div class="row">

<div class="col-4"><img src="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="400px" height="350px" alt=""/><br />


    </div>
    <div class="col-6"><ul class="list-group list-group-flush">

        <li className="list-group-item"><label>Available from</label>
<div className=''>
      <DatePicker onChange={onChange} value={value} />
      
      
     
    </div></li>
        <li class="list-group-item"><label>Posted On</label>
<div className=''>
      <DatePicker onChange={onChange} value={value} /></div></li>
        <li class="list-group-item"><label>Boundry Wall</label><div>
        <select name="BoundryWall" id="BoundryWall">
    <option value="Yes">Yes</option>
    <option value="No">No</option></select></div></li>
        <li class="list-group-item"><label>Facing</label><div>
        <select name="facing" id="facing">
    <option value="East">East</option>
    <option value="West">West</option>
    <option value="North">North</option>
    <option value="South">south</option>

    
    <option value="north-east">North-East</option>
                    <option value="north-west">North-West</option>
                    <option value="south-east">South-East</option>
                    <option value="south-west">South-West</option>
    </select></div></li>
        
        <button className="btn2">Buy</button>
        


    </ul>
    </div>
    </div><br/>
    </form>
    </>
);
    }
export default Buy;