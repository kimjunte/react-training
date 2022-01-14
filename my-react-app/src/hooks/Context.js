import React, {useState, useContext} from "react";

// by convention the context name should include the word Context
// you can think about a context like a global vairbale
// we can make the ocntext avalible to all components in a tree
export const ToyContext = React.createContext();

const Context = () => {
    // both Grandparent and Child are interested in the toy
    const [toy, setToy] = useState('Ball')



    return (
        <ToyContext.Provider value={toy}>
            {/* all of the components in this tree have access to the Context's data */}
            <Grandparent toy={toy}/>
        </ToyContext.Provider>
    );
}

const Child = () => {
    const toy = useContext(ToyContext);
    return (
        <>
            <p>Child playing with {toy}</p>
        </>
    )
}

const Parent = () => {
    return(
        <>
            <p>Parent</p>
            <Child />
        </>
    );
}

const Grandparent = () => {
    const toy = useContext(ToyContext);
    return (
        <>
            <p>Gradparent playing with {toy}</p>
            <Parent/>
        </>
    )
}

export default Context;
