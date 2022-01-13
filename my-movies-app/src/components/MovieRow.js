const MovieRow = props => {
    // prop.author = "Dave"; Error!
    const {Title, Poster, Year} = props.movie;
    return (
        <tr>
            <td>{Title}</td>
            <td>{Year}</td>
            <td><a href={Poster}>Poster</a></td>
        </tr>
    );
}

export default MovieRow;