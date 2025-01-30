import React, {  createContext, useEffect, useState } from 'react';

const ResellerContext=createContext()

const ResellerContextProvider = ({children}) => {
  const [reseller ,setReseller] = useState([null])
useEffect(()=>{
try{
  fetch("https://demobackend-hhwe.onrender.com/api/auth/reseller/me",
  {
    method:"GET",
   headers: {"Content-Type": "application/json"},
   credentials:"include"
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result);
    setReseller(result)
  })

}
catch(err){
  console.error(err)
}
  },[])

  return (
    <div>
    <ResellerContext.Provider value={{reseller}} >
        {children}
    </ResellerContext.Provider>
      
    </div>
  );
}

export  {ResellerContextProvider,ResellerContext};
