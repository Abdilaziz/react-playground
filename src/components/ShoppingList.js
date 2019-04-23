import React, { Component } from 'react';

/**
 * 
 * A React component takes in parameters called props, and returns
 * a hierarchy of views to display via the render method.
 * 
 * It returns a description of what you want to see on the screen.
 * It is also called a React Element, which is a lightweight description
 * of what to render.
 * 
 * Most React developers use a special syntax called "JSX" which makes 
 * these strucutres easier to write.
 */

class ShoppingList extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
// above is the same as below

// return React.createElement('div', {className: 'shopping-list'},
//   React.createElement('h1', /* ... h1 children ... */),
//   React.createElement('ul', /* ... ul children ... */)
// );

  
// Example usage: <ShoppingList name="Mark" />
export default ShoppingList;