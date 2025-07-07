import React from "react";
import ReactDOM from "react-dom/client";

const parent = ReactDOM.createRoot(document.querySelector('.container'));
const parent2 = ReactDOM.createRoot(document.querySelector('.container2'));

const newelm = React.createElement('div',{className:'title',key:'main'},[
    React.createElement('h1',{key:'one'},`This is "h1" Tag`),
    React.createElement('h2',{key:'two'},`This is "h2" Tag`),
    React.createElement('h3',{key:'three'},`This is "h3" Tag`)
])

parent.render(newelm);

const Newelm2 = (
    <div className='title'>
        <h1 key='1'>This is H1 tag using Jsx</h1>
        <h2 key='2'>This is h2 tag using Jsx</h2>
        <h3 key='3'>This is h3 tag using Jsx</h3>
    </div>
);

parent2.render(Newelm2);


const Newelm3 = () => (
    <div className='title'>
    <h1 key='1'>This is H1 tag using Jsx i</h1>
    <h2 key='2'>This is h2 tag using Jsx</h2>
    <h3 key='3'>This is h3 tag using Jsx</h3>
    {Newelm4()}
    <Newelm4 />
    <Newelm4></Newelm4>
</div>
);

const Newelm4 = () => (
    <h1>This is Composition</h1>
);

parent2.render(<Newelm3 />);