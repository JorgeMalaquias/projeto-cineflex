import styled from 'styled-components';
import movie1 from '../assets/img/image 3.png';
import {React, useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Time(props){
    return(
            <Link to={"/"}>
                <TimeTag key={props.index}>{props.st.name}</TimeTag>
            </Link>

    );
}
function Schedule(props){
    return(
        <ScheduleTag>
            <Info2>{props.day.weekday} - {props.day.date}</Info2>
            <TimeContainer>
                {props.day.showtimes.map((st,index)=><Time st={st} key={index}/>)}
            </TimeContainer>
        </ScheduleTag>
            
    );
}




export default function MovieSchedule(props){
    const { idMovie} = useParams();
    const [movieInfo,setMovieInfo]= useState({}); 
    useEffect(()=>{
        const promise= axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        promise.then((promise)=> setMovieInfo(promise.data));
    },[]);
    const days = movieInfo.days;
    if(!(movieInfo.days===undefined)){
        return(
            <Container>
                <Info>Selecione o horário</Info>
                <Schedules>
                    {days.map((day,index)=><Schedule key={index} day={day}/>)}
                </Schedules>
                <Bottom>
                    <img src={movieInfo.posterURL}alt={movieInfo.title}></img>
                    <div>{movieInfo.title}</div>
                </Bottom>
            </Container>
        );
    }
    return(
        <div>LOADING...</div>
    );
    
}
const Schedules = styled.div`
    margin-bottom: 110px;
    margin-left: 10px;
    a{
        text-decoration: none;
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
const Container = styled.div`
    
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
const Info2 = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
`
const TimeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const TimeTag = styled.div`
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    text-align: center;
    color: white;
    background-color: #E8833A;
    width: 82px;
    height: 42px;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    text-decoration: none;
`
const ScheduleTag = styled.div`
    margin-bottom: 8px;
`