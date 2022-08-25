import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const seconds = new Date().getSeconds();
const backgroundColor = seconds % 2 === 0
? '#fff'
: '#000';
const textColor = seconds % 2 !== 0
? '#fff'
: '#000';
const styles = {
  color: textColor,
  backgroundColor
}

const element = (
  <div 
  className="seconds"
  style={styles}
  >{seconds}</div>
);
root.render(<React.StrictMode>{element}</React.StrictMode>);