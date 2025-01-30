import React, { useEffect, useState } from 'react';

const Testing = () => {
const [data,setData]=useState([''])
useEffect(()=>{
const apiKey = 'ZCVJ6WOW86733TKZ';
const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=${apiKey}`;

fetch(url)
  .then(response => response.json())  
  .then(result => {
    console.log(result); 
    setData(result)
  })
  .catch(error => {
    console.error('Error:', error.message); 
  });

},[])

  return (

     <>

     </>
  );
}

export default Testing;
