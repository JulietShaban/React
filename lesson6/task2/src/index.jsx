import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mailbox from './Mailbox'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode><Mailbox unreadMessages={[3, 2, 8]}/></React.StrictMode>);