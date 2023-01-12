import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Call from '../components/Call';
import About from '../components/About';
import Projects from '../components/Projects';
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

      <Header fixed={fixedHeader} />

      <FloatingButton title='Ir ao topo' show={fixedHeader} onClick={(event) => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }} >
        <FontAwesomeIcon icon={["fa-solid", "fa-arrow-up"]} className="icon" />
      </FloatingButton>

      <Call margin={fixedHeader} />

      <About />

      <Projects />

      <Footer />
    </>
  )
}
