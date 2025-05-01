import { StyledAbout, List } from "./styles";

const About = () => {
    return (
        <StyledAbout>
            <h2>Sobre Mim</h2>
            <List>
            <h3>Objetivo Profissional</h3>
            <ul>
                <li>Evoluir continuamente como desenvolvedor full stack, aprofundando conhecimentos em arquitetura de software e boas práticas de desenvolvimento, enquanto colaboro em equipes para entregar valor real aos usuários.</li>
            </ul>
            </List>
            <List>
            <h3>Habilidades</h3>
            <ul>
                <li>Front-End: HTML, CSS, JavaScript, Typescript, React, Next.js</li>
                <li>Back-End: Node.js, Spring Boot com Java</li>
                <li>Banco de Dados: MongoDB, Postgresql, MySql</li>
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
                <li>Inglês Intermediário</li>
            </ul>
            </List>
            <List>
                <h3>Experiência Profissional</h3>
                <ul>
                    <li>Aprendiz Assistente Administrativo | Prodiet Medical Nutrition | mar de 2023 - jun de 2024</li>
                    <li>Estagiário Desenvolvedor Full Stack | Nex Energy | mar de 2025 - o momento</li>
                </ul>
            </List>
            <List>
                <h3>Informações</h3>
                <ul>
                    <li>Gosto de aprender coisas novas, todo conhecimento novo é bem-vindo</li>
                    <li>Sempre busco dar o meu melhor em tudo o que faço</li>
                </ul>
            </List>
        </StyledAbout>
    );
};

export default About;
