import styled from 'styled-components';
import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";



function Movie(props) {
    return (
        <MovieTag>
            <Link to={`/sessoes/${props.id}`}>
                <img src={props.img} alt={props.title}></img>
            </Link>
        </MovieTag>
    );
}



export default function Movies(props) {
    useEffect(()=>props.setOrderDetails({}),[]);
    
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((promise) => setMovies(promise.data));
    }, []);
    return (
        <>
            <Info>Selecione o filme</Info>
            <MoviesList>
                {movies.map((m,index)=><Movie key={index} id={m.id} title={m.title}img={m.posterURL}/>)}
            </MoviesList>
        </>

    );
}




const Info = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MoviesList = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

const MovieTag = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001A;
    margin-bottom: 26px;

    img{
        width: 129px;
        height: 193px;
    }
`