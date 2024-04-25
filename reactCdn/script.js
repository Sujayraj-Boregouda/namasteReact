// const heading = React.createElement('h1', {id: 'head', class: 'new', category: 'Developer', weight: '68 Kg', height: '5.4 Feet'}, "Sujayraj Boregouda");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const newHeading = React.createElement('div', {id: 'newObj', class: 'main-child'}, 
[
    React.createElement('div', {class: 'div-1'}, 
        [
            React.createElement('p', {class: 'child-1'}, 'child 1'),
            React.createElement('p', {class: 'child-2'}, 'child 2')
        ]
    ),
    React.createElement('div', {class: 'div-2'}, 
        [
            React.createElement('p', {class: 'child-3'}, 'child 3'),
            React.createElement('p', {class: 'child-4'}, 'child 4')
        ] 
    )
]
);

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(newHeading);