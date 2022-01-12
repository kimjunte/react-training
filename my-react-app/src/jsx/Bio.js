 import React from 'react';
/*
 * JSX: JavaScript and XML
 * XML notation that is compiled into JavaScript code
 * It is compiled into React.createElement
 */

const Bio = () => {

    // The following two lines are identical
    const greetingParagraph = <p>Hello world</p>;
    // const greetingParagraph = React.createElement('p', null, 'Hello world');

    const myName = "Jun-te Kim";
    const languages = ['C', 'Python', 'Javascript'];
    const employed = true;

    // this is an old-school transformation
    // don't do this - use map instead (see below)
    const listItems = [];
    for (let language of languages) {
        listItems.push(<li>{language}</li>);
    }

    return (
        <>
            <h2>My Bio</h2>
            {greetingParagraph}
            <p>My name is {myName}</p>
            <p>I know the following languages:</p>
            <ul>
                {languages.map(language => <li key={language}>{language}</li>)}
            </ul>
            <p>{employed ? "I am employed" : "I am currently unemployed"}</p>
            {/*
            if the operand on the left is truthy then the operand on the right is returned
            if the operand on the left is falsey then it is returned
            in the case of true or false React renders nothing
            */}
            {employed && <p>I am employed</p>}
        </>
    );
}

export default Bio;