import { StyledCall, CallImage, CallText, CallAlign } from "./styles";

const Call = ({ margin }) => {
    return (
        <StyledCall margin={margin}>
            <CallImage>
                <img alt="Felipe Laskos profile picture" src="./img/felipe-laskos.jpg" />
            </CallImage>
            <CallText>
            <CallAlign>
                <h2 className='nome'>Felipe Laskos</h2>
                <h2>Estudante</h2>
                <h2 className='underlined'>Desenvolvedor</h2>
            </CallAlign>
            </CallText>
        </StyledCall>
    );
};

export default Call;
