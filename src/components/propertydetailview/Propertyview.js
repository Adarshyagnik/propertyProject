import "./propertyview.css";

const Propertyview= ()=>{
    return(




        
        <div>
            <center><h2>Property detail</h2></center>
            <form className="propdet">
            <div class="row">

<div class="col-4"><img src="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="400px" height="250px" alt=""/><br />


    </div>
    <div class="col-6"><ul class="list-group list-group-flush">

        <li class="list-group-item">Location: Bhopal</li>
        <li class="list-group-item">Furnishing: Semi Furnished</li>
        <li class="list-group-item">Area: 2800sqft</li>
        <li class="list-group-item">Facing: East</li>
        
        <button className="btn2">Buy</button>
        


    </ul>
    </div>
    </div><br/>
    </form>

    

   <center><h2 className="hh2"> More Details </h2></center> 
    <form className="propdet2">


    <div class="col-6"><ul class="list-group list-group-flush">

<li class="list-group-item">Price : 1.03 crore</li>
<li class="list-group-item">Address : Karond Bhopal</li>
<li class="list-group-item">Furnishing : Semi Furnished</li>
<li class="list-group-item">Age Of Construction : New Construction</li>
<pr><li  class="list-group-item"> Description : A residential house is available for sale. It covered area of 2800 sq-ft, it is a good location. Please contact for more details. </li></pr>





</ul>
</div>
        
    </form>
            
    </div>
    )
    
}
export default Propertyview;