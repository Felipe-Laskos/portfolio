import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { StyledHeader } from "./styles";
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'next-i18next';

const Header = ({ fixed }) => {
    const { t } = useTranslation('common');

    return (
        <StyledHeader fixed={fixed}>
            <h2>{t('header.name')}</h2>
            <a href="https://github.com/Felipe-Laskos" target="_blank">
            <FaGithub className="icon icon-header"/>
            </a>
            <a href="https://www.linkedin.com/in/felipe-matheus-laskos/" target="_blank">
            <FaLinkedin className="icon icon-header" />
            </a>
            <LanguageSwitcher />
        </StyledHeader>
    );
}

export default Header;