import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = ReactDOM.createRoot(document.querySelector('.container'));
const parent2 = ReactDOM.createRoot(document.querySelector('.second'));
const parent3 = ReactDOM.createRoot(document.querySelector('.third'));

const newelm = (<div>
                    <div key={1} className='one'>
                        <h1>This is first child</h1>
                    </div>
                    <div key={2} className='two'>
                        <h1>This is second child</h1>
                    </div>
               </div>)

parent.render(newelm);

setTimeout(() => {
    const rerendered = (<div>
        <div key={1} className="one">
            <h1>Rerendered first child</h1>
        </div>
        <div key={2} className="two">
            <h1>Rerendered second child</h1>
        </div>
    </div>)
    parent.render(rerendered);
},5000)


// <div>
//      <div class='one'>
//           <h1> This is first child </h1>
//      </div>
//      <div class='two'>
//           <h1>This is second child</h1>
//      </div>
// </div>


// functional components

const normal = (
    <div key={0}>
        <h1  className='hi'> This is a normal react element</h1>
    </div>
);

parent2.render(normal);

const Functional = () => (
    <div key={1}>
        <h1 className='hi'> This is a Functional element</h1>
    </div>
);

parent3.render(<Functional />)

//Functional Component (Component Composition)
const Normal1 = () => (
    <div key={0}>
        <h1  className='hi'> This is a normal react element</h1>
    </div>
);

const Functional1 = () => (
    
    <div key={1}>
        <Normal1 />
        <h1 className='hi'> This is a Functional element</h1>
    </div>
);

parent3.render(<Functional1 />)
