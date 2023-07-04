import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", {
    id: 'parent'
}, "HEY MAN! how's life???!",
React.createElement('div', 
{ id: "child"}, 
[React.createElement('h1', {}, "Yo MAN!!"), React.createElement('h1', {}, "Yo MAN!!"), React.createElement('h1', {}, "Yo MAN!! This is cool")]
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);