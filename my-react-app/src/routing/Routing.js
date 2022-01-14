import {BrowserRouter, Link, Switch, Route, Routes, useParams} from 'react-router-dom'


const Routing = () => {

    return (
        // all router code must be inside a BrowserRouter
        <BrowserRouter>
            <ul>
                {/* clicking on a Link component writes a new address to the address bar ( via the history obj) */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/movies/42">Movie 42</Link></li>
            </ul>

            {/* we want to switch between components depending onthe current route*/}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                {/* the ':' indicates a path variable */}
                <Route path="movies/:movieId" element={<MovieDetail />}></Route>
            </Routes>
        </BrowserRouter>
    );
}


const Home = () => <h3>Home</h3>;
const About = () => <h3>About</h3>;
const Contact = () => <h3>Contact</h3>;
const MovieDetail = () => {

    // useParams returns an object of path variables
    const {movieId} = useParams();

    return <><h3>MovieDetail</h3> <p>Detail for movie {movieId}</p></>

}
export default Routing;