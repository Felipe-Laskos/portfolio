import styled, { keyframes } from "styled-components";

const GoReturn = keyframes`
    2% {
        left: 75%;
    }

    50% {
        left: 0;
    }

    52% {
        left: 0;
    }

    100% {
        left: 75%;
    }
`;

const Video = styled.video`
    max-width: 50%;
    border-radius: 5px;

    @media (max-width: 700px) {
        margin: 50px 0;
        max-width: 90%;
    }
`;

const Project = styled.div`
    width: 90%;
    padding: 60px 0;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};

    div {
        padding-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-size: 30px;
        font-family: 'Sura', serif;
        text-align: center;
    }

    h4 {
        font-weight: 500;
        font-size: 25px;
        font-family: 'Sura', serif;
        text-align: center;
        display: block;
        margin-bottom: 15px;
    }

    p {
        font-family: 'Quicksand', sans-serif;
        font-size: 20px;
        text-align: center;
        margin-bottom: 15px;
    }

    ul {
        margin-left: 50px;
        max-width: 50%;
    }

    li {
        font-family: 'Quicksand', sans-serif;
        font-size: 18px;
        margin-bottom: 5px;
    }

    a {
        color: ${props => props.theme.colors.orange};
        cursor: pointer;
        text-decoration: underline;
    }

    @media (max-width: 700px) {
        div {
            padding-top: 0;
            flex-direction: column;
        }

        ul {
            margin: 0;
            max-width: 90%;
        }
    }
`;

const Projects = styled.section`
    width: 100%;
    background-color: ${props => props.theme.colors.blue};

    h2 {
        font-family: 'Inria Sans', sans-serif;
        text-align: center;
        width: 100%;
        font-size: 40px;
        color: ${props => props.theme.colors.white};
        position: relative;
        overflow: hidden;
    }

    h2::after {
        content: "";
        height: 3px;
        background-color: ${props => props.theme.colors.light_blue};
        width: 25%;
        position: absolute;
        bottom: 0;
        left: 75%;
        animation-name: ${GoReturn};
        animation-duration: 10s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`;

export default () => {
    return (
            <Projects>
                <h2>Projetos</h2>
                <Project>
                    <h3>PodPato (Versão Front-end)</h3>
                    <h4>HTML, CSS, JavaScript</h4>
                    <p>Site para ver os melhores podcasts do Youtube!</p>
                    <div>
                        <Video src="./vid/PodPato (Versão Front-end).webm" controls />
                        <ul>
                            <li>Link: <a href="https://felipe-laskos.github.io/podpato/" target="_blank">https://felipe-laskos.github.io/podpato/</a></li>
                            <li>Front-End: HTML, CSS, JavaScript</li>
                            <li>API do Youtube</li>
                            <li>Modais do Bootstrap</li>
                            <li>Bastante JavaScript para controle da API, resultando em um site com muitas funcionalidades dentro dos podcasts</li>
                            <li>Sistema de vídeos salvos</li>
                            <li>Sistema de histórico de vídeos</li>
                        </ul>
                    </div>
                </Project>
                <Project>
                    <h3>PodPato (Front e Back)</h3>
                    <h4>HTML, CSS, JavaScript, Node.js, MongoDB</h4>
                    <p>Tudo que a versão somente front-end entrega, porém com sistema de criação e login de contas, sistema de likes e comentários em cada podcast com banco de dados MongoDB!</p>
                    <div>
                        <Video src="./vid/PodPato (Front e Back).webm" controls />
                        <ul>
                            <li>Link: <a href="https://podpato.onrender.com" target="_blank">https://podpato.onrender.com</a></li>
                            <li>Utiliza diversos módulos do Node.js</li>
                            <li>Sistema de contas com e-mail e senha, registro e login</li>
                            <li>Aplicação com Banco de dados MongoDB, sendo controlado através do Mongoose</li>
                            <li>Autenticação com o módulo Passport</li>
                            <li>Sistema de Likes e Dislikes</li>
                            <li>Sistema de comentários, que podem ser criados, editados e excluídos</li>
                            <li>Salvos e Histórico dos podcasts em conjunto com a conta logada</li>
                        </ul>
                    </div>
                </Project>
        </Projects>
    );
};
