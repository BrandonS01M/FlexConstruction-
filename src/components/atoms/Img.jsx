import styled from "styled-components";

const StyledImg = styled.img`
    
`;

function Img({src, alt, propsAccordion}) {
    return (
        <StyledImg src={src} alt={alt} propsAccordion={propsAccordion}/>
    );
}

export default Img;