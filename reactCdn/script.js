// const heading = React.createElement('h1', {id: 'head', class: 'new', category: 'Developer', weight: '68 Kg', height: '5.4 Feet'}, "Sujayraj Boregouda");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const newHeading = React.createElement('div', {id: 'newObj', class: 'main-child'}, 
[
React.createElement('span', {class: 'span'}, "I am Child 1"),
React.createElement('span', {class: 'span'}, "I am Child 2")
]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newHeading);