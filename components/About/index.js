import styled, { keyframes } from "styled-components";

const GoReturn = keyframes`
    2% {
        left: 0;
    }

    50% {
        left: 75%;
    }

    52% {
        left: 75%;
    }

    100% {
        left: 0;
    }
`;

const List = styled.div`
    width: 400px;
    margin: 25px;
    color: ${props => props.theme.colors.white};


    h3 {
        font-size: 25px;
        font-family: 'Sura', serif;
        position: relative;
    }

    li {
        font-family: 'Quicksand', sans-serif;
        font-size: 18px;
    }
    
`;

const About = styled.section`
    padding: 75px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.blue};

    h2 {
        font-family: 'Inria Sans', sans-serif;
        text-align: center;
        width: 100%;
        font-size: 40px;
        color: ${props => props.theme.colors.white};
        position: relative;
    }

    h2::after {
        content: "";
        height: 3px;
        background-color: ${props => props.theme.colors.light_blue};
        width: 25%;
        position: absolute;
        bottom: 0;
        left: 0;
        animation-name: ${GoReturn};
        animation-duration: 10s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`;

export default () => {
    return (
        <About>
            <h2>Sobre Mim</h2>
            <List>
                <h3>Habilidades</h3>
                <ul>
                    <li>Front-End: HTML, CSS, JavaScript</li>
                    <li>Back-End: Node.js, Express, MongoDB</li>
                </ul>
            </List>
            <List>
                <h3>Estou a procura...</h3>
                <ul>
                    <li>De uma vaga para desenvolvedor Front-end Júnior</li>
                </ul>
            </List>
            <List>
                <h3>Estudos e idiomas</h3>
                <ul>
                    <li>Estudando no 2º Ano do Ensino Médio </li>
                    <li>Cursei front-end na Alura (através do programa Edu-Tech)</li>
                    <li>Aprendendo back-end pela Internet</li>
                    <li>Começando a aprender React e Python</li>
                    <li>Inglês Básico</li>
                </ul>
            </List>
            <List>
                <h3>Informações</h3>
                <ul>
                    <li>Tenho 16 anos</li>
                    <li>Não tenho experiência profissional (nunca fui contratado)</li>
                    <li>Gosto de aprender coisas novas, todo conhecimento novo é bem-vindo</li>
                    <li>Sempre busco dar o meu melhor em tudo o que eu faço</li>
                </ul>
            </List>
        </About>
    );
};
