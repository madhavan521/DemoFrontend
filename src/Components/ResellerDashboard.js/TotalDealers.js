import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  
import { FaUserCircle } from 'react-icons/fa'; 

const TotalDealers = () => {
    const [dealerdata ,setDealerdata]=useState([])
      useEffect(()=>{
         fetch('https://demobackend-hhwe.onrender.com/api/reseller/push/get' ,
       {   method:"GET",
        headers:{
          "Content-Type":"application/json"  

        },
        credentials:"include"
       })
       .then(res=>res.json())
       .then(result => {
        console.log(result);
        setDealerdata(result)
       })
      },[])


      console.log(dealerdata)
  return (
    <div>
    <div className="conatiner ">
        <div className="row my-4 ">
    <h3 className='text-center my-2'>𝔻𝔼𝔸𝕃𝔼ℝ𝕊</h3>
      
    {
        Array.isArray(dealerdata) && dealerdata.map((user) => (
                    <div key={user._id} className="col-md-4 mb-4">
                      <Link to="/reseller" className="text-decoration-none">
                        <div className="card shadow-lg border-0 card-hover">
                          <div className="card-body text-center">
                            <FaUserCircle 
                              size={50}  
                              style={{
                                WebkitBackgroundClip: 'text',
                              }} 
                              className="mb-3" 
                            />
                        <h5 className="card-title mb-2  text-primary"><strong className='text-dark' >Username : </strong> {user.username}</h5>
                            <p className="card-text mb-1 text-primary"> <strong className='text-dark'>Fullname : </strong>{user.fullname}</p>
                            <p className="card-text mb-1 text-primary"> <strong className='text-dark'>Location : </strong>{user.Profile[0]?.location || "N/A"}</p>

                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
    }
        </div>
    </div>
    </div>
  );
}

export default TotalDealers;
