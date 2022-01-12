import React from 'react';
/*
 * A component is a renderable chunk of your application
 * A class component is a class that inherits from Component with a render method that returns JSX
 * Q. Why would I code a class component?
 * A. Historically only class components can have state, Hooks changed all this in React V16
 * 
 * A prop is input to a component
 * A prop is a custom HTML attribute
 * For a class there exists a prop named props which is inherited from Component
 */

class MyClassComponent extends React.Component {
    render() {
        // this.prop.author = "Dave"; Error!
        const {name, author} = this.props;
        return (
            <>
                <h3>My Class Component</h3>
                <p>Name: {name}</p>
                <p>Author: {author}</p>
            </>
        );
    }
}

export default MyClassComponent;