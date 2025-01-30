import React, {  createContext, useEffect, useState } from 'react';

const DealerContext=createContext()

const DealerContextProvider = ({children}) => {
  const [dealer ,setDealer] = useState([null])
useEffect(()=>{
try{
  fetch("https://demobackend-hhwe.onrender.com/api/auth/dealer/me",
  {
    method:"GET",
   headers: {"Content-Type": "application/json"},
   credentials:"include"
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result);
    setDealer(result)
  })

}
catch(err){
  console.error(err)
}
  },[])

  return (
    <div>
    <DealerContext.Provider value={{dealer}} >
        {children}
    </DealerContext.Provider>
      
    </div>
  );
}

export  {DealerContextProvider,DealerContext};
