import styled from "styled-components";

const StyledTexture1 = styled.div`
    height: 100px;
    width: 60px;
    background-color: #242439;
    transition: 4s;
    border-radius: 0px 0px 50px 50px;
    margin-right: 20px; 

    @media (min-width: 470px){
        height: 130px;
        width: 70px;
        margin-right: 40px;
    }

    @media (min-width: 650px){
        height: 160px;
        width: 100px;
        margin-right: 40px;
    }


    ${props => props.propsTextureOne && `
        height: 24vh;
        width: 22vw;
        background-color: #242439;
        transition: 4s;
        border-radius: 50px 50px 0px 0px;
        margin-left: 20%;

        @media (min-width: 650px){
        height: 40vh;
        width: 10vw;
        margin-right: 40px;
    }
    `}
    ${props => props.propsTextureTwo && `
        height: 20vh;
        width: 60px;
        background-color: #242439;
        transition: 4s;
        border-radius: 50px 50px 0px 0px;
        margin-right: 20px;
    `}
    ${props => props.propsTextureThree && `
        height: 20vh;
        width: 60px;
        background-color: #242439;
        transition: 4s;
        border-radius: 50px 50px 0px 0px;
        margin-right: 20px;
    `}
    


    /* @media screen and (min-width:600px){
        .textureprin{
            height: 220px;
            width: 200px;
            border-radius: 0px 0px 100px 1000px;
        }
    } */
`
;

function Texture1({propsTextureOne, propsTextureTwo, propsTextureThree, className}) {
    return ( 
        <StyledTexture1 alt="Textura principal"
            propsTextureOne={propsTextureOne}
            propsTextureTwo={propsTextureTwo}
            propsTextureThree={propsTextureThree}
            className={className}/>
     );
}

export default Texture1;