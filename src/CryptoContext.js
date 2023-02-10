// import React, { createContext, useContext, useEffect, useState } from 'react'

// const crypto = createContext();

// const CryptoContext = ({children}) => {
//     const[currency , setCurrency ]= useState ("INR")
//     const[symbol , setSymbol ]= useState ("₹")

//     useEffect(()=>{
//         if(currency === "INR") setSymbol("₹");
//         else if(currency === "USD") setSymbol("$");
//     },[currency]);
    
//   return (  
//     <crypto.Provider value={{currency,symbol,setCurrency}}>
//         {children}
//     </crypto.Provider>
//   )
// }
// export default CryptoContext
// export const CryptoState = ()=>{
//     return useContext(crypto)
// };


import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};