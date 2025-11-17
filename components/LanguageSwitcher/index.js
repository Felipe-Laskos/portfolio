import { useRouter } from 'next/router';
import { SwitcherContainer, LangButton } from './styles';

const LanguageSwitcher = () => {
    const router = useRouter();
    const { locale, pathname, asPath, query } = router;

    const changeLanguage = (newLocale) => {
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    return (
        <SwitcherContainer>
            <LangButton
                onClick={() => changeLanguage('pt')}
                active={locale === 'pt'}
            >
                PT
            </LangButton>
            <span>|</span>
            <LangButton
                onClick={() => changeLanguage('en')}
                active={locale === 'en'}
            >
                EN
            </LangButton>
        </SwitcherContainer>
    );
};

export default LanguageSwitcher;
