import {useState} from 'react';

const MutuableStateFunction = () => {
    const [philosphy, setPhilopsophy] = useState({philosopher: "Hume", quotation: "I think therefore I am"})

    const {philosopher, quotation} = philosphy;

    const handleCorrectPhilosopher = () => {
        // the following will NOT trigger a re-render
        // setPhilopsophy.philosopher = "Descartes";
        // setPhilopsophy(philosophy);
        
        // this will cause a re-render
        setPhilopsophy({...philosphy, philosopher: "Descartes"});

    }

    return (
        <>
            <p>{philosopher} said '{quotation}'</p>
            <button onClick={handleCorrectPhilosopher}>Correct the philosopher</button>
        </>
    );

}

export default MutuableStateFunction;