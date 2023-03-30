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


    /* @media screen and (min-width:600px){
        .textureprin{
            height: 220px;
            width: 200px;
            border-radius: 0px 0px 100px 1000px;
        }
    } */
`
;

function Texture1() {
    return ( 
        <StyledTexture1  className="textureprin" alt="Textura principal"/>
     );
}

export default Texture1;