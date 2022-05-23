import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success(props) {
    console.log(props.orderDetails);
    return (
        <Container>
            <div>Pedido feito
                com sucesso!
            </div>
            <Container2>
                <div>
                    <div>Filme e sessão</div>
                    <div>
                        <div>{props.orderDetails.title}</div>
                        <div>{props.orderDetails.day} {props.orderDetails.hour}</div>
                    </div>
                </div>
                <div>
                    <div>Ingressos</div>
                    <div>
                        {props.orderDetails.seats.map((s, index)=><div key ={index}> Assento {s}</div>)}
                    </div>
                </div>
                <div>
                    <div>Comprador</div>
                    <div>
                        <div>Nome: {props.orderDetails.name}</div>
                        <div>CPF: {props.orderDetails.cpf[0]}{props.orderDetails.cpf[1]}{props.orderDetails.cpf[2]}.{props.orderDetails.cpf[3]}{props.orderDetails.cpf[4]}{props.orderDetails.cpf[5]}.{props.orderDetails.cpf[6]}{props.orderDetails.cpf[7]}{props.orderDetails.cpf[8]}-{props.orderDetails.cpf[9]}{props.orderDetails.cpf[10]}</div>
                    </div>
                </div>
            </Container2>


            <button>
                <Link to={"/"}>Voltar pra Home</Link>
            </button>
        </Container>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > div:nth-child(1){
            font-family: 'Roboto', sans-serif;
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
            margin-top: 20px;
            margin-bottom: 40px;
            color: #247A6B;
            width: 180px;
    }
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
            border: none;
            a{
                text-decoration: none;
                color:white;
            }
        }
`
const Container2 = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
        >div{
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        > div > div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-family: 'Roboto', sans-serif;
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
            letter-spacing: 0.04em;
            text-align: left;
            color: #293845;
        }
        > div > div > div{
            font-family: 'Roboto', sans-serif;
            font-family: Roboto;
            font-size: 22px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0.04em;
            text-align: left;
            color: #293845;
        }       
`