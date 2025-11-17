import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Call from '../components/Call';
import About from '../components/About';
import { Projects, Project, Video, Languages, Details, Language } from '../components/Projects';

import { FaJava, FaNodeJs, FaJs, FaReact, FaHtml5, FaCss3, FaArrowUp } from 'react-icons/fa';
import { SiMongodb, SiSpring, SiPostgresql } from 'react-icons/si';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation("common");

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

      <FloatingButton title={t('floatingButton.goToTop')} show={fixedHeader} onClick={(event) => {
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
        <h2>{t('projects.title')}</h2>
        <Project>
          <h3>{t('projects.doAndBuild.name')}</h3>
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
            <Language title="Spring">
              <SiSpring className="icon" />
              <h4 className="name">Spring</h4>
            </Language>
            <Language title="Java">
              <FaJava className="icon" />
              <h4 className="name">Java</h4>
            </Language>
            <Language title="Postgresql">
              <SiPostgresql className="icon" />
              <h4 className="name">Postgresql</h4>
            </Language>
          </Languages>
          <p>{t('projects.doAndBuild.description')}</p>
          <Details>
            <Video src="./vid/doandbuild.webm" controls />
            <ul>
              <li>Link: <a href="https://doandbuild.onrender.com" target="_blank">https://doandbuild.onrender.com</a></li>
              <li>{t('projects.doAndBuild.features.database')}</li>
              <li>{t('projects.doAndBuild.features.auth')}</li>
              <li>{t('projects.doAndBuild.features.folders')}</li>
              <li>{t('projects.doAndBuild.features.tasks')}</li>
              <li>{t('projects.doAndBuild.features.clone')}</li>
              <li>{t('projects.doAndBuild.features.likes')}</li>
              <li>{t('projects.doAndBuild.features.house')}</li>
            </ul>
          </Details>
        </Project>
        <Project>
          <h3>{t('projects.podpatoFrontend.name')}</h3>
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
          <p>{t('projects.podpatoFrontend.description')}</p>
          <Details>
            <Video src="./vid/PodPato (Versão Front-end).webm" controls />
            <ul>
              <li>Link: <a href="https://felipe-laskos.github.io/podpato/" target="_blank">https://felipe-laskos.github.io/podpato/</a></li>
              <li>{t('projects.podpatoFrontend.features.stack')}</li>
              <li>{t('projects.podpatoFrontend.features.api')}</li>
              <li>{t('projects.podpatoFrontend.features.modals')}</li>
              <li>{t('projects.podpatoFrontend.features.javascript')}</li>
              <li>{t('projects.podpatoFrontend.features.saved')}</li>
              <li>{t('projects.podpatoFrontend.features.history')}</li>
            </ul>
          </Details>
        </Project>
        <Project>
          <h3>{t('projects.podpatoFullstack.name')}</h3>
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
          <p>{t('projects.podpatoFullstack.description')}</p>
          <Details>
            <Video src="./vid/PodPato (Front e Back).webm" controls />
            <ul>
              <li>Link: <a href="https://podpato.onrender.com" target="_blank">https://podpato.onrender.com</a></li>
              <li>{t('projects.podpatoFullstack.features.nodejs')}</li>
              <li>{t('projects.podpatoFullstack.features.accounts')}</li>
              <li>{t('projects.podpatoFullstack.features.mongodb')}</li>
              <li>{t('projects.podpatoFullstack.features.passport')}</li>
              <li>{t('projects.podpatoFullstack.features.likes')}</li>
              <li>{t('projects.podpatoFullstack.features.comments')}</li>
              <li>{t('projects.podpatoFullstack.features.savedHistory')}</li>
            </ul>
          </Details>
        </Project>
        <Project>
          <h3>{t('projects.ticTacToe.name')}</h3>
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
          <p>{t('projects.ticTacToe.description')}</p>
          <Details>
            <Video src="./vid/jogo-da-velha.webm" controls />
            <ul>
              <li>Link: <a href="https://felipe-laskos-tic-tac-toe.vercel.app" target="_blank">https://felipe-laskos-tic-tac-toe.vercel.app</a></li>
              <li>{t('projects.ticTacToe.features.components')}</li>
              <li>{t('projects.ticTacToe.features.hooks')}</li>
              <li>{t('projects.ticTacToe.features.choice')}</li>
              <li>{t('projects.ticTacToe.features.nicks')}</li>
              <li>{t('projects.ticTacToe.features.restart')}</li>
            </ul>
          </Details>
        </Project>
      </Projects>
      
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
