import { StyledAbout, List } from "./styles";

const About = () => {
    return (
        <StyledAbout>
            <h2>Sobre Mim</h2>
            <List>
            <h3>Objetivo Profissional</h3>
            <ul>
                <li>Oportunidade de emprego na área de desenvolvimento</li>
            </ul>
            </List>
            <List>
            <h3>Habilidades</h3>
            <ul>
                <li>Front-End: HTML, CSS, JavaScript, React, Next.js</li>
                <li>Back-End: Node.js, Spring Boot com Java</li>
                <li>Banco de Dados: MongoDB, Postgresql</li>
                <li>Ferramentas: Linux, Windows, Docker, Git, GitHub</li>
                <li>Noções em: Python, C, C++</li>
                <li>Outros: Excel, Word</li>
            </ul>
            </List>
            <List>
            <h3>Atividades complementares</h3>
            <ul>
                <li>Em 2021 fiz parte do projeto da Edutech, que deu oportunidade para jovens aprenderem sobre o desenvolvimento de sites.</li>
            </ul>
            </List>
            <List>
            <h3>Estudos e idiomas</h3>
            <ul>
                <li>Estudante UFPR - Tecnologia em Análise e Desenvolvimento de Sistemas</li>
                <li>Cursei front-end na Alura (através do programa Edu-Tech)</li>
                <li>Aprendendo back-end pela Internet</li>
                <li>Inglês Intermediário</li>
            </ul>
            </List>
            <List>
                <h3>Experiência Profissional</h3>
                <ul>
                    <li>Aprendiz Assistente Administrativo - Prodiet Medical Nutrition - 1 ano e 4 meses</li>
                </ul>
            </List>
            <List>
            <h3>Informações</h3>
            <ul>
                <li>Tenho 18 anos</li>
                <li>Gosto de aprender coisas novas, todo conhecimento novo é bem-vindo</li>
                <li>Sempre busco dar o meu melhor em tudo o que faço</li>
            </ul>
            </List>
        </StyledAbout>
    );
};

export default About;
