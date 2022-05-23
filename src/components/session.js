import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import movie1 from "../assets/img/image 3.png";


function isSelected(selected, n, available) {
    if (available === true) {
        if (selected === true && n === 1) {
            return ("#8DD7CF");
        }
        if (selected === true && n === 2) {
            return ("1px solid #7B8B99");
        }
    }
}
function select(available, setSelected, selected, seatsPurchase, id, setSeatsPurchase) {
    if (available === false) {
        alert("Esse assento não está disponível");
    } else {
        if (selected === false) {
            setSelected(!selected);
            setSeatsPurchase([...seatsPurchase, id]);
        } else {
            setSelected(!selected);
            setSeatsPurchase(seatsPurchase.filter((e) => !(e === id)));
        }
    }
}

function Seat(props) {
    const [selected, setSelected] = useState(false);
    return (
        <SeatTag onClick={() => select(props.isAvailable, setSelected, selected, props.seatsPurchase, props.id, props.setSeatsPurchase)} selected={selected} isAvailable={props.isAvailable}>{props.name}</SeatTag>
    );
}
function order(name,cpf,seatsPurchase, e){
    e.preventDefault();
    if(!(cpf.length===11)){
        alert("Cpf inválido");
    }
    if(seatsPurchase.length===0){
        alert("Selecione ao menos um assento");
    }else{
        const orderInfo = {
            ids : seatsPurchase,
            name,
            cpf
        }
        axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`,orderInfo);
    }
}
export default function Session() {
    const { idSessao } = useParams();
    const [sessionInfos, setSessionInfos] = useState({});
    const [seatsPurchase, setSeatsPurchase] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((promise) => setSessionInfos(promise.data));
    }, [])
    if (!(sessionInfos.id === undefined)) {
        return (
            <Container>
                <Info>Selecione o(s) assento(s)</Info>
                <div>
                    <Seats>
                        {sessionInfos.seats.map((seat, index) => <Seat key={index} seatsPurchase={seatsPurchase} setSeatsPurchase={setSeatsPurchase} id={seat.id} name={seat.name} isAvailable={seat.isAvailable} />)}
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
                <form onSubmit={(e)=>order(name,cpf,seatsPurchase,e)}>
                    <label>Nome do comprador:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder='Digite seu nome...'/>
                    <label>CPF do comprador:</label>
                    <input type="number" value={cpf} onChange={e => setCpf(e.target.value)} required placeholder='Digite seu CPF...'/>
                    <button type="submit">Reservar assento(s)</button>
                </form>
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
    return (
        <div>LOADING...</div>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 320px;
        height: 50px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: #AFAFAF;
        border: 1px solid #D4D4D4
    }
    label{
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: #293845;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        button{
            margin-top: 16px;
            height: 42px;
            width: 225px;
            border-radius: 3px;
            background-color: #E8833A;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0.04em;
            text-align: center;
            color: white;
        }
    }
`
const Info = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    width: 100%;
    height: 100px;
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
    background-color: ${props => props.isAvailable === true ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.isAvailable === true ? "#7B8B99" : "#F7C52B"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-align: center;
    background-color: ${props => isSelected(props.selected, 1, props.isAvailable)};
    border: ${props => isSelected(props.selected, 2, props.isAvailable)};
`
const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 350px;
    margin-bottom: 20px;
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