import React from 'react';
import ReactDOM from 'react-dom';

const saludo = <h1>Web Page Sota Code</h1>
console.log(saludo)

const divRoot = document.querySelector('#root');

ReactDOM.render(saludo, divRoot)