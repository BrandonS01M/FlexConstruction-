import styled from "styled-components";

const StyledTexture2 = styled.div`
    height: 17vh;
    width: 60px;
    background-color: #242439;
    transition: 4s;
    border-radius: 50px 50px 0px 0px;
    position:absolute;
    bottom:0;
    left:110%;

    @media (min-width: 470px){
        height: 10vh;
        width: 70px;
        margin-right: 40px;
    }

    @media (min-width: 650px){
        height: 27vh;
        width: 12vh;
        margin-right: 40px;
        border-radius: 100px 100px 0px 0px;
    }
    ${props => props.propsTexture2 && `
        height: 7vh;
        width: 60px;
        background-color: #242439;
        transition: 4s;
        border-radius: 50px 50px 0px 0px;
        position:absolute;
        bottom:0;
        left:200%; 
        
        @media (min-width: 650px){
        height: 18vh;
        width: 12vh;
        border-radius: 100px 100px 0px 0px;
        margin-right: 40px;
    }
    `}
`;

function Texture1({propsTexture2}) {
    return ( 
        <StyledTexture2 propsTexture2={propsTexture2} className="textureprin" alt="Textura principal"
            />
     );
}

export default Texture1;