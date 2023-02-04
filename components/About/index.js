import { StyledAbout, List } from "./styles";

const About = () => {
    return (
        <StyledAbout>
            <h2>Sobre Mim</h2>
            <List>
            <h3>Habilidades</h3>
            <ul>
                <li>Front-End: HTML, CSS, JavaScript, React, Next.js</li>
                <li>Back-End: Node.js, Express, MongoDB</li>
                <li>Outros: Python</li>
            </ul>
            </List>
            <List>
            <h3>Estou a procura...</h3>
            <ul>
                <li>De uma possível oportunidade de emprego como desenvolvedor web</li>
            </ul>
            </List>
            <List>
            <h3>Estudos e idiomas</h3>
            <ul>
                <li>Estudando no 3º Ano do Ensino Médio </li>
                <li>Cursei front-end na Alura (através do programa Edu-Tech)</li>
                <li>Aprendendo back-end pela Internet</li>
                <li>Aprimorando minhas habilidades em React e Python</li>
                <li>Inglês Básico</li>
            </ul>
            </List>
            <List>
            <h3>Informações</h3>
            <ul>
                <li>Tenho 16 anos</li>
                <li>Não tenho experiência profissional</li>
                <li>Gosto de aprender coisas novas, todo conhecimento novo é bem-vindo</li>
                <li>Sempre busco dar o meu melhor em tudo o que faço</li>
            </ul>
            </List>
        </StyledAbout>
    );
};

export default About;
