import styled from 'styled-components';
import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import { Call, CallText, CallImage, CallAlign } from '../components/Call';
import { About, List } from '../components/About';
import { Projects, Project, Video } from '../components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGithub, faLinkedin, faArrowUp);

export default function Home() {
  const [fixedHeader, setFixedHeader] = React.useState({
    screenHeight: 0,
    screenPosition: 0
  });

  React.useEffect(() => {
    window.addEventListener("scroll", function (event) {
      setFixedHeader({
        screenHeight: this.innerHeight,
        screenPosition: this.scrollY
      });
    });
  }, []);

  return (
    <>
      <Head title="Felipe Laskos" />
      <Header fixed={fixedHeader}>
        <h2>Felipe Laskos</h2>
        <a href="https://github.com/Felipe-Laskos" target="_blank">
          <FontAwesomeIcon icon={["fa-brands", "fa-github"]} className="icon icon-header" />
        </a>
        <a href="https://www.linkedin.com/in/felipe-matheus-laskos-068667219/" target="_blank">
          <FontAwesomeIcon icon={["fa-brands", "fa-linkedin"]} className="icon icon-header" />
        </a>
      </Header>
      <FloatingButton title='Ir ao topo' show={fixedHeader} onClick={(event) => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }} >
        <FontAwesomeIcon icon={["fa-solid", "fa-arrow-up"]} className="icon" />
      </FloatingButton>
      <Call margin={fixedHeader}>
        <CallImage />
        <CallText>
          <CallAlign>
            <h2>Felipe Laskos</h2>
            <h2>Desenvolvedor Front-end</h2>
            <h2 className='underlined'>Júnior</h2>
          </CallAlign>
        </CallText>
      </Call>
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
              <li>Link: <a href="https://podpato.herokuapp.com/" target="_blank">https://podpato.herokuapp.com/</a></li>
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
      <Footer>
        <h3>Contato via:</h3>
        <h4>e-mail: <a href="mailto:felipematheuslaskos@gmail.com">felipematheuslaskos@gmail.com</a></h4>
      </Footer>
    </>
  )
}
