/*
 * A component is a renderable chunk of your application
 * A functional component is a function that returns JSX
 * 
 * A prop is input to a component
 * A prop is a custom HTML attribute
 * For a functional component that means a param usually named props
 * All of the props are wrapped in an object and passed to the function as the first arg
 * 
 * NB: props CANNOT be modified within the receiving component
 * NB: this does NOT mean mutable objects ref'd by props can't be modified - they can!
 */

const MyFunctionalComponent = props => {
    // prop.author = "Dave"; Error!
    const {name, author} = props;

    return (
        <>
            <h3>My Functional Component</h3>
            <p>Name: {name}</p>
            <p>Author: {author}</p>
        </>
    );
}

export default MyFunctionalComponent;