import WrapperPhoto from "../components/molecules/WrapperPhoto";
import WrapperTexture from "../components/molecules/WrapperTexture";
import WrapperTitle from "../components/molecules/WrapperTitle";
import HeadPerfil from "../components/organims/HeadPerfil";
import DataInfo from "../components/organims/DataInfo";
import Title from "../components/atoms/Title";
import TextureC from "../assets/img/TextureCircle.svg";
import '../assets/styled/Perfil.css';

function Perfil() {
    return ( 
        <>
            <HeadPerfil/>
            <WrapperTexture/>
            <Title
            propsTitleVist
            className="titleVist" 
            msn="Perfil"/>
            <WrapperTitle/>
            <WrapperPhoto/>
            <DataInfo/>
            <footer className="footerPer">
                <img src={TextureC} className="text1" />
                <img src={TextureC} className="text2" />
            </footer>

        </>
     );
}

export default Perfil;