import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Call from '../components/Call';
import About from '../components/About';
import { Projects, Project, Video, Languages, Details, Language } from '../components/Projects';

import { FaNodeJs, FaJs, FaReact, FaHtml5, FaCss3, FaArrowUp } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

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

      <Header fixed={fixedHeader} />

      <FloatingButton title='Ir ao topo' show={fixedHeader} onClick={(event) => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }} >
        <FaArrowUp className="icon" />
      </FloatingButton>

      <Call margin={fixedHeader} />

      <About />

      <Projects>
        <h2>Projetos</h2>
        <Project>
          <h3>PodPato (Versão Front-end)</h3>
          <Languages>
            <Language title='Html5'>
              <FaHtml5 className="icon" />
              <h4 className="name">Html5</h4>
            </Language>
            <Language title="Css3">
              <FaCss3 className="icon" />
              <h4 className="name">Css3</h4>
            </Language>
            <Language title="JavaScript">
              <FaJs className="icon" />
              <h4 className="name">JavaScript</h4>
            </Language>
          </Languages>
          <p>Site para ver os melhores podcasts do Youtube!</p>
          <Details>
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
          </Details>
        </Project>
        <Project>
          <h3>PodPato (Front e Back)</h3>
          <Languages>
            <Language title='Html5'>
              <FaHtml5 className="icon" />
              <h4 className="name">Html5</h4>
            </Language>
            <Language title="Css3">
              <FaCss3 className="icon" />
              <h4 className="name">Css3</h4>
            </Language>
            <Language title="JavaScript">
              <FaJs className="icon" />
              <h4 className="name">JavaScript</h4>
            </Language>
            <Language title="NodeJS">
              <FaNodeJs className="icon" />
              <h4 className="name">NodeJS</h4>
            </Language>
            <Language title="MongoDB">
              <SiMongodb className="icon" />
              <h4 className="name">MongoDB</h4>
            </Language>
          </Languages>
          <p>Tudo que a versão somente front-end entrega, porém com sistema de criação e login de contas, sistema de likes e comentários em cada podcast com banco de dados MongoDB!</p>
          <Details>
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
          </Details>
        </Project>
        <Project>
          <h3>Jogo da Velha</h3>
          <Languages>
            <Language title='Html5'>
              <FaHtml5 className="icon" />
              <h4 className="name">Html5</h4>
            </Language>
            <Language title="Css3">
              <FaCss3 className="icon" />
              <h4 className="name">Css3</h4>
            </Language>
            <Language title="JavaScript">
              <FaJs className="icon" />
              <h4 className="name">JavaScript</h4>
            </Language>
            <Language title="React">
              <FaReact className="icon" />
              <h4 className="name">React</h4>
            </Language>
          </Languages>
          <p>Jogo da velha criado utilizando a framework React!</p>
          <Details>
            <Video src="./vid/jogo-da-velha.webm" controls />
            <ul>
              <li>Link: <a href="https://felipe-laskos-tic-tac-toe.vercel.app" target="_blank">https://felipe-laskos-tic-tac-toe.vercel.app</a></li>
              <li>Trabalha com o sistema de componentes do React</li>
              <li>Utiliza os Hooks disponibilizados pela framework (States e Effects)</li>
              <li>Os jogadores escolhem X ou O antes de jogar</li>
              <li>Os jogadores podem mudar seus nicks</li>
              <li>Quando o jogo acaba, pode ser reiniciado</li>
            </ul>
          </Details>
        </Project>
      </Projects>
      
      <Footer />
    </>
  )
}
