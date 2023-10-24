import React from "react";
import * as S from './Movie.styled';

function Movie(props) {
    console.log(props.data);
    const data = props.data;
    return (
        <>
            <S.Container>
                <div className="box">
                    <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" />
                    <S.Content>
                        <p>{data.original_title}</p>
                        {/* <p>{data.original_title}</p> */}
                        <p>{data.vote_average}/10.0</p>
                    </S.Content>
                </div>
            </S.Container>
        </>
    )
}

export default Movie;

