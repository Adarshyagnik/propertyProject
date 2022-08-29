import "./dashboard.css"

const Dashboard= ()=>{
    return(
        <div>
            
            <div className="blue">
            
             <div className="container">
             <div className="admin-details">
                <span style={{fontSize:"20px" }}><h4>Admin Dashboard</h4>
                </span>
            </div> 
            <div className="second-container"><img style={{width:"60%",height:"100%",float:"right"}}
            src="https://images.emojiterra.com/google/noto-emoji/v2.034/share/1f3e0.jpg"/>
            <button className="first-button">Property detail</button>
            <button className="button">Customer detail</button>
            <button className="button">Owner detail</button>
            
            <button className="button">log out</button>
            
            </div>
             </div>
         
         
        
        
        
        {/* <div className="second-container"></div> */}
        


    </div>
    </div>
    )
    
}
export default Dashboard;