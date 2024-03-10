import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { StyledHeader } from "./styles";

const Header = ({ fixed }) => {
    return (
        <StyledHeader fixed={fixed}>
            <h2>Felipe Laskos</h2>
            <a href="https://github.com/Felipe-Laskos" target="_blank">
            <FaGithub className="icon icon-header"/>
            </a>
            <a href="https://www.linkedin.com/in/felipe-matheus-laskos/" target="_blank">
            <FaLinkedin className="icon icon-header" />
            </a>
        </StyledHeader>
    );
}

export default Header;