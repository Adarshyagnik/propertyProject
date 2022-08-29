import "./localitydetail.css";

const Localitydetails=()=>{
    return(

        <div>
        <center>
        <h1>Locality Details</h1>
            <form className="form">
                


<div className="divv2">
            
            <label for="City">City* </label>

    <select name="City" id="City">
    <option value="Bhopal">Bhopal</option>
    <option value="Indore">Indore</option>
    <option value="Gwalior">Gwalior</option>
    <option value="Vidisha">Vidisha</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Banglore">Banglore</option>
    <option value="Chennai">North-East</option>
    <option value="Delhi">Delhi</option>
    <option value="Amritsar">Amritsar</option>
    <option value="Ahemdabad">Ahemdabad</option>
    </select>
    </div>

    <div className="divv1">
                <label for="Locality">Locality* </label>
                <input type="text" id="locality" name="locality" placeHolder="MP Nagar"></input>
            </div>

            <div className="divv1">
                <label for="Landmark">Landmark / Street* </label>
                <input type="text" id="landmark" name="landmark" placeHolder="123, MP Nagar"></input>
            </div>
            
            
        <button className="btn">Save and Continue</button>
        

            
            </form>
            </center>
            </div>

        
    );

}
export default Localitydetails;