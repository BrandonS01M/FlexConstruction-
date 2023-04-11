import styled from "styled-components";
import Title from "../atoms/Title";

const StyledWT = styled.div`
`; 

function WrapperTitleD({msn, next, TMW, one_prop}) {
    return (
        <StyledWT>
            <Title TMW={TMW} msn={msn} next={next} one_prop={one_prop}/>
        </StyledWT>
    );
}

export default WrapperTitleD;