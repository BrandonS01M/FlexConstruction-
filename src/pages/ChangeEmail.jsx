import { Link } from "react-router-dom";
import Logo from "../assets/img/Logos/LogoNormal.svg";
import Title from "../components/atoms/Title";
import WrapperTexture from "../components/molecules/WrapperTexture";
import FormChangeEmail from "../components/organims/FormChangeEmail";
import WrapperTextureFoo from "../components/molecules/WrapperTextureFoo";
import WrapperPhoto from "../components/molecules/WrapperPhoto";
import '../assets/styled/ChangeEmail.css';

function ChangeEmail() {
    const onC = (e) =>{
        e.preventDefault();
        let x = document.querySelector(".opcNavigate");
        if(x.style.display === 'none'){
            x.style.display = 'block'
        }
        else{
            x.style.display = 'none';
        }
    }
    return ( 
        <>
            <main className="changeEmail">
                <header className="headerChangeEmail">
                    <div className="logoContainerHead">
                        <img src={Logo} className="imgLogoN"/>
                    </div>
                    <Title
                    propsTitleVist2
                    msn="Cambiar Correo"/>
                    <div className="">  
                        <button className="btnImgHam" id="opc" onClick={onC}></button>  
                    </div>
                </header>

                <div className="containerOpc">
                    <div className="opcNavigate" id="opcN">
                        <nav className="naVigate">
                            <div className="redirVist">
                                <Link className="links" to="/perfil">Perfil</Link>
                            </div>
                            <div className="redirVist">
                                <Link className="links">Seguridad</Link>
                            </div>
                            <div className="redirVist">
                                <Link className="links">Cerrar Sesion</Link>
                            </div>
                        </nav>  
                    </div>
                </div>
                <Title 
                propsTitleVist
                className="titleEdit"
                msn="Cambiar Correo"/>
                <WrapperTexture/>
                <WrapperPhoto/>

                <FormChangeEmail/>

                <footer className="footerTexture">
                    <WrapperTextureFoo/>
                </footer>
            </main>
        </>
     );
}

export default ChangeEmail;