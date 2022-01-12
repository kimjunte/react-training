const MovieReviewForm = ({onNewReview}) => {
    const review = {username: "Junte", text:"It was good", rating:0};

    const handleNewReview = () => {
        onNewReview(review);
    }

    return (
        <>
            <h1>Add a review</h1>
            <button onClick={handleNewReview}>Add review</button>
        </>
    );
}

export default MovieReviewForm;