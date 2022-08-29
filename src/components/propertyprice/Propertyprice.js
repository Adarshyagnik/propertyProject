import './propertyprice.css';





const PropertyPrice = () => {
    return (

        <form className="formmm">
            <div className='aaa'>

                <div className="divv2">
                    <label><h5>Property available for </h5></label>
                </div>
                <div className="divv7">

                    <input type="radio" name="only" value="onlyrent " />
                    <label className="l">Only rent</label>
                    <input type="radio" name="only" value="onlylease" />
                    <label className="l">Only lease</label>

                </div>
                <div>
                    <label className='bb'><h5>Expected Rent *</h5></label>
                    <label className='bb'><h5>Expected Deposit *</h5></label>
                </div>
                <div className='divv2'>

                    <input classname="cc" type="number" name="inputt" placeHolder="₹ 25000"></input>
                    <input classname="cc" type="number" name="inputt" placeHolder="₹ 75000"></input>
                </div>
                <div className='ee'></div>
                <input className='divv6' type="checkbox" id="rentnegotiable" name="rentnegotiable" value="rentnegotiable" />
                <label className="ff" for="rentnegotiable"> Rent Negotiable</label>

                <div className="divv4">
                    <label for="Maintenance"> <h5>Monthly Maintenance</h5> </label>
                    <select name="Maintenance" id="Maintenance">
                        <option value="Maintenance ">Monthly Maintenance </option>

                    </select>

                    <label><h5>Maintenance Amount *</h5></label>
                </div>
                <div className="divv5">

                    <input type="number" name="inputt" placeHolder="₹ 2000"></input>
                </div>


                <div>
                    <label className='bb' for="Available"><h5> Available From *</h5></label>
                    <label className='bb' for="tenants"> <h5>Preferred Tenants *</h5></label></div>
                <div className="divv6">
                    <input type="date" id="Available" name="Available" />

                    <select name="tenants" id="tenants">
                        <option value="family ">Family </option>
                        <option value="family ">Single </option>


                    </select>

                </div>


                <div>
                    <label className="bbb" for="furnishing"> <h5>Furnishing *</h5></label>
                    <label className="bbb" for="parking"> <h5>Parking *</h5></label>
                </div>
                <div className="divv6">
                    <select name="furnishing" id="furnishing">
                        <option value="furnished ">Fully furnished </option>
                        <option value="non ">Non furnished </option>
                    </select>

                    <select name="parking" id="parking">
                        <option value="parking ">Car </option>
                        <option value="non ">Bike </option>
                    </select>
                </div>


                <label className="bb"><h5>Description</h5></label>

                <div className="divv8">
                    <input type="text" placeHolder=""></input>
                </div>
            </div>
            <div>
                <button className="btn">Save and Continue</button>
            </div>


        </form>
    );
}
export default PropertyPrice;