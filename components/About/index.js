import { StyledAbout, List } from "./styles";
import { useTranslation } from 'next-i18next';

const About = () => {
    const { t } = useTranslation('common');

    return (
        <StyledAbout>
            <h2>{t('about.title')}</h2>
            <List>
            <h3>{t('about.professionalGoal.title')}</h3>
            <ul>
                <li>{t('about.professionalGoal.content')}</li>
            </ul>
            </List>
            <List>
            <h3>{t('about.skills.title')}</h3>
            <ul>
                <li>{t('about.skills.frontend')}</li>
                <li>{t('about.skills.backend')}</li>
                <li>{t('about.skills.database')}</li>
                <li>{t('about.skills.tools')}</li>
                <li>{t('about.skills.notions')}</li>
                <li>{t('about.skills.other')}</li>
            </ul>
            </List>
            <List>
            <h3>{t('about.activities.title')}</h3>
            <ul>
                <li>{t('about.activities.content')}</li>
            </ul>
            </List>
            <List>
            <h3>{t('about.education.title')}</h3>
            <ul>
                <li>{t('about.education.university')}</li>
                <li>{t('about.education.alura')}</li>
                <li>{t('about.education.english')}</li>
            </ul>
            </List>
            <List>
                <h3>{t('about.experience.title')}</h3>
                <ul>
                    <li>{t('about.experience.prodiet')}</li>
                    <li>{t('about.experience.nex')}</li>
                    <li>{t('about.experience.nexContractor')}</li>
                </ul>
            </List>
            <List>
                <h3>{t('about.info.title')}</h3>
                <ul>
                    <li>{t('about.info.learning')}</li>
                    <li>{t('about.info.best')}</li>
                </ul>
            </List>
        </StyledAbout>
    );
};

export default About;
