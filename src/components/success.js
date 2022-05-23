import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success(props) {
    return (
        <Container>
            <div>Pedido feito
                com sucesso!
            </div>
            <Container2>
                <div>
                    <div>Filme e sessão</div>
                    <div>
                        <div>Enola Holmes</div>
                        <div>24/06/2021 15:00</div>
                    </div>
                </div>
                <div>
                    <div>Ingressos</div>
                    <div>
                        <div>Assento 15</div>
                        <div>Assento 16</div>
                    </div>
                </div>
                <div>
                    <div>Comprador</div>
                    <div>
                        <div>Nome: João da Silva Sauro</div>
                        <div>CPF: 123.456.789-10</div>
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