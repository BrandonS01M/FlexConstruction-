import Texture1 from "../atoms/Texure1";
import Texture2 from "../atoms/Texure2"
import '../../assets/styled/ChangeEmail.css'
function WrapperTextureFoo() {
    return ( 
        <>
            <div className="contenedorTexture">
                <Texture1 propsTextureOne/>
                <Texture2/>
                <Texture2 propsTexture2/> 
            </div>
        </>
     );
}

export default WrapperTextureFoo;