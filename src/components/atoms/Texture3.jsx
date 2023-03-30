import styled from "styled-components";
import TextureA3 from "../../assets/img/Texture3.png";

const StyledTexture3 = styled.img`
    width: 70px;
    height: 70px;
    transition: 4s;
    position: absolute;
    bottom: 1%;


    @media screen and (min-width:500px){
        width: 100%;
        height: 400px;
        
    }

    @media screen and (min-width:700px){
        width: 100%;
        height: 700px;
    }

`
;

function Texture3() {
    return ( 
        <StyledTexture3  className="texturesec" src={TextureA3} alt="Textura secuendaria"/>
     );
}

export default Texture3;