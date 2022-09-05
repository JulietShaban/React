import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./Calculator";

import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
 
function toCelsius(fahrenheit){
  return(fahrenheit - 32)*5/9;
}

function toFahrenheit(celsius){
  return (celsius *9/5) +32;
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

root.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>
);
