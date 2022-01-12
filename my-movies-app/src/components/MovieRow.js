const MovieRow = props => {
    // prop.author = "Dave"; Error!
    const {Title, Poster, Year} = props.movie;
    return (
        <tr>
            <td>{Title}</td>
            <td>{Poster}</td>
            <td>{Year}</td>
        </tr>
    );
}

export default MovieRow;