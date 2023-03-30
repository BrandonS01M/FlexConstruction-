import styled from "styled-components";

const StyledTitleType2 = styled.h1`
    font-size: 2rem;
    font-family: 'Abeezee';
    color: #101820;
    
`;

function TitleType2({msn, propsT, className}) {
    return (
        <StyledTitleType2 className={className} propsT={propsT}>{msn}</StyledTitleType2>
    );
}

export default TitleType2;