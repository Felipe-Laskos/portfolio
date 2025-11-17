import { StyledCall, CallImage, CallText, CallAlign } from "./styles";
import { useTranslation } from 'next-i18next';

const Call = ({ margin }) => {
    const { t } = useTranslation('common');

    return (
        <StyledCall margin={margin}>
            <CallImage>
                <img alt="Felipe Laskos profile picture" src="./img/felipe-laskos.jpg" />
            </CallImage>
            <CallText>
            <CallAlign>
                <h2 className='nome'>{t('header.name')}</h2>
                <h2>{t('call.student')}</h2>
                <h2 className='underlined'>{t('call.developer')}</h2>
            </CallAlign>
            </CallText>
        </StyledCall>
    );
};

export default Call;
