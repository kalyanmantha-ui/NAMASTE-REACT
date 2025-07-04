import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = ReactDOM.createRoot(document.querySelector('.container'));


const newelm = React.createElement('div',{},[
    React.createElement('div',{key: 0 ,id:'hi'},React.createElement('h1',{},'hi there')),
    React.createElement('div',{key:1 , id: 'hi2'},React.createElement('h1',{},'this is second child'))
])

parent.render(newelm);

setTimeout(() => {
    const rerendered = React.createElement('div',{},[
        React.createElement('div',{key:0 ,id: 'hi'},React.createElement('h1',{},'Re rendered for first child')),
        React.createElement('div',{key:1, id:'hi2'},React.createElement('h1',{},'re rendered for second child'))
    ])

    parent.render(rerendered);
},5000)


