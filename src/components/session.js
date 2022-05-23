import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import movie1 from "../assets/img/image 3.png";



function Seat(props){
    console.log(props.isAvailable);
    return(
        <SeatTag isAvailable={props.isAvailable}>{props.name}</SeatTag>
    );
}

export default function Session() {
    const {idSessao} = useParams();
    const [sessionInfos,setSessionInfos]= useState({});
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((promise)=>setSessionInfos(promise.data));
    },[])
    if(!(sessionInfos.id===undefined)){
        console.log(sessionInfos);
        return (
            <Container>
                <Info>Selecione o(s) assento(s)</Info>
                <div>
                    <Seats>
                        {sessionInfos.seats.map((seat,index)=><Seat key={index} name={seat.name} isAvailable={seat.isAvailable}/>)}
                    </Seats>
                    <Subtitle>
                        <div>
                            <div></div>
                            <div>Selecionado</div>
                        </div>
                        <div>
                            <div></div>
                            <div>Disponível</div>
                        </div>
                        <div>
                            <div></div>
                            <div>Indisponível</div>
                        </div>
                    </Subtitle>
                </div>
    
                <Bottom>
                    <img src={sessionInfos.movie.posterURL} alt={sessionInfos.movie.title}></img>
                    <div>
                        <div>{sessionInfos.movie.title}</div>
                        <div>{sessionInfos.day.weekday} - {sessionInfos.name}</div>
                    </div>
                </Bottom>
            </Container>
        );
    }
    return(
        <div>LOADING...</div>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
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
    margin-left: 10px;
`
const Seats = styled.div`
    width: 350px;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    > div{
        height: 26px;
        width: 26px;
        border-radius: 12px;
        margin-bottom: 18px;
        margin-right: 7px;
        color: black;
    }
`
const SeatTag = styled.div`
    background-color: ${props => props.isAvailable===true ? "#C3CFD9":"#FBE192"};
    border: 1px solid ${props => props.isAvailable===true ? "#7B8B99":"#F7C52B"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-align: center;

`
const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 350px;
    > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    > div > div:nth-child(2){
        height: 28px;
        width: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;
        color:#4E5A65;
    }
    > div:nth-child(1) > div:nth-child(1){
        height: 26px;
        width: 26px;
        border-radius: 12px;
        background-color: #8DD7CF;
        border: 1px solid #1AAE9E;
    }
    > div:nth-child(2) > div:nth-child(1){
        height: 26px;
        width: 26px;
        border-radius: 12px;
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
    }
    > div:nth-child(3) > div:nth-child(1){
        height: 26px;
        width: 26px;
        border-radius: 12px;
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }
`
const Bottom = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 114px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    img{
        width: 64px;
        height: 88px;
        padding: 8px;
        background-color: white;
        margin-left: 16px;
        margin-right: 30px;
    }
    > div{
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: #293845;
        margin-right: 30px;
    }
`