import styled from "styled-components";
import TextureA2 from "../../assets/img/Texture2.png";

const StyledTexture2 = styled.img`
    width: 100%;
    height: 300px;
    transition: 4s;


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

function Texture2() {
    return ( 
        <StyledTexture2  className="texturesec" src={TextureA2} alt="Textura secuendaria"/>
     );
}

export default Texture2;