import { StyledCall, CallImage, CallText, CallAlign } from "./styles";

const Call = ({ margin }) => {
    return (
        <StyledCall margin={margin}>
            <CallImage />
            <CallText>
            <CallAlign>
                <h2>Felipe Laskos</h2>
                <h2>Desenvolvedor Web</h2>
                <h2 className='underlined'>Júnior</h2>
            </CallAlign>
            </CallText>
        </StyledCall>
    );
};

export default Call;
