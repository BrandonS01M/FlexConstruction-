import IconTools from "../assets/img/IconTools.svg"
import { Link } from "react-router-dom";
import TitleTy from "../components/atoms/TitleTy";
import LogoWhite from "../assets/img/LogoWhite.svg";
import Text from "../components/atoms/Text";
import Title from "../components/atoms/Title";
import WrapperCard from "../components/molecules/WrapperCard";
import WrapperNet from "../components/molecules/WrapperNet";
import Wrapperinfo from "../components/molecules/WrapperInfo";
import WrapperExecutive from "../components/molecules/WrapperExecutive";
import WrapperLogo from "../components/molecules/WrapperLogo";
import '../assets/styled/Landing.css';


function LandingPage() {
    return ( 
        <>
        <main className="principal">
            <header className="headerLanding">
                <div className="">
                    <a href="#"><WrapperLogo/></a>
                </div>
                <div className="redirecciones">
                    <a href="#identifyUs" className="redir">Nosotros</a>
                    <a href="#identifyCard" className="redir">Ofrecemos</a>
                    <a href="#identifyInfo" className="redir">Info</a>
                    <Link href="#" className="redir" to="/login">Inicia YA</Link>
                </div>
            </header>
            <div className="imgInfo">
                <div className="titleTyInfo">
                <TitleTy className="titlePrin">Administra tu futuro y </TitleTy>
                <TitleTy className="titlePrin">construye tu <span className="spanType1">Hogar</span></TitleTy>
                </div>
            </div>
            
            <WrapperCard id="identifyCard"/>
            <Wrapperinfo id="identifyInfo"/>

            <div className="containerSec2">
                <div className="seCon1">
                    <img src={IconTools} className="iconTools"/>
                </div>
                <div className="seCon2">
                    <Title 
                    propsTyInf
                    msn="Contamos con las mejores Herramientas"/>
                </div>
            </div>

            <WrapperExecutive id="identifyUs"/>

            <footer className="footerLanding">
                <div className=" containerFooterL">
                    <div className="containerLogo">
                        <img src={LogoWhite} className="logoWhite" />
                    </div>
                    <div className="containerInfo">
                        <WrapperNet/>
                        <Text
                        propsFooter
                        msn="Copyright © 1999-2023 El presente canal de instrucción o ambiente, 
                        es operado por DeRemate.Com de México, S. de R.L. de C.V. identificada bajo 
                        la marca comercial Flex Construction."/>
                    </div>
                </div>
            </footer>
        </main>
        </>
     );
}

export default LandingPage;