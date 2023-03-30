import DataPerfil from "../components/organims/DataPerfil";
import WrapperPhoto from "../components/molecules/WrapperPhoto";
import WrapperTexture from "../components/molecules/WrapperTexture";
import Texture2 from "../components/atoms/Texture2";
import WrapperTitle from "../components/molecules/WrapperTitle"
import WrapperHead from "../components/molecules/WrapperHead";
import Title from "../components/atoms/Title";
import Texture4 from "../assets/img/Texture4.svg";
import Texture5 from "../assets/img/Texture5.svg"
import '../assets/styled/Perfil.css'


function Perfil({msn}) {
    return ( 
        <>
            <WrapperHead/>
            <WrapperTexture/>
            <Title
            propsTitleVist
            className="titleVist" 
            msn="Perfil"/>
            <WrapperTitle
            />
            <WrapperPhoto/>
            <DataPerfil/>

            <footer className="footerP">
                <img src={Texture4} className="textu4"/>
                    <Texture2 className="imgFond"/>
                <img src={Texture5} className="textu5"/>
            </footer>
        
        </>
     );
}

export default Perfil;