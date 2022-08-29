import "./propertydet.css";



const PropertyDet = () => {
    return (
<form className="form">
    <h2>Property Details</h2>
        <div className ="divv">
            <label for="ApartmentType">Apartment Type* </label>

            <select name="ApartmentType" id="ApartmentType">
                <option value="IndependentHouse">Independent House/Villa</option>
                <option value="Gatedcommunity">Gated community/Villa</option>
            </select>




            <div className="divv2">
                <label for="BHK">BHK Type* </label>
                <select name="BHK" id="BHK">
                    <option value="1rk">1 RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="4BHK">4+BHK</option>
                </select>

                <label className="a" for="Floor">Floor* </label>

                <select name="floor" id="floor">
                    <option value="ground">Ground</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                <label for="TotalFloor">TotalFloor* </label>

                <select name="totalfloor" id="totalfloor">
                    <option value="ground">Ground</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

            </div>
            <div className="divv4">
                <label for="propertyAge">Property Age* </label>

                <select name="propertyage" id="propertyage">
                    <option value="less">Less than 1 Year</option>
                    <option value="1to3">1 to 3 Year</option>
                    <option value="3to5">3 to 5 Year</option>
                    <option value="5to10">5 to 10 Year</option>
                    <option value="more">more than 1 Year</option>
                </select>



                <label for="Facing">Facing* </label>

                <select name="facing" id="facing">
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                    <option value="north-east">North-East</option>
                    <option value="north-west">North-West</option>
                    <option value="south-east">South-East</option>
                    <option value="south-west">South-West</option>


                </select>

            </div>

            

            <div className="divv1">
                <label for="Area">Built up Area* </label>
                <input type="text" id="area" name="area" placeHolder="2000"></input>
            </div>



        </div>
        <button className="btn">Save and Continue</button>
        </form>

        
    );
}
export default PropertyDet;