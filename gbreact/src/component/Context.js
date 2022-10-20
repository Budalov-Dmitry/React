import React, { createContext, useState } from "react";

const number = {
  light:{ 
    background:'#eee',
    text:'#000'
  },
  dark:{
    background:'#000',
    text:'#eee'
  },
};


const NumberContext = createContext()
export const useNumber = () => React.useContext(NumberContext)
// eslint-disable-next-line react/prop-types
export const NumberProvider = ({children}) => {

  const [message,setTheme] = useState([number.dark]);
  const switchTheme = () => {
    setTheme(prevState => prevState === number.dark ? number.light : number.dark)
  }
  return (

    <NumberContext.Provider value={{message, switchTheme}}>
      {children}
    </NumberContext.Provider>
  )
}