import { StyledFooter } from "./styles";
import { useTranslation } from 'next-i18next';

const Footer = () => {
    const { t } = useTranslation('common');

    return (
        <StyledFooter>
            <h3>{t('footer.contact')}</h3>
            <h4>{t('footer.email')} <a href="mailto:felipematheuslaskos@gmail.com">felipematheuslaskos@gmail.com</a></h4>
        </StyledFooter>
    );
}

export default Footer;
