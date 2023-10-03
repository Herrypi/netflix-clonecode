function Movie(props) {
    console.log(props.data);
    const data = props.data;
    return (
        <div className="box">
            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" />
            <div className="content">
                <p>{data.original_title}</p>
                <p>{data.vote_average}/10.0</p>
            </div>
        </div>

    )
}

export default Movie;

