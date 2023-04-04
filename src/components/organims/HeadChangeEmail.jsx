import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logos/LogoNormal.svg";
import Title from "../atoms/Title";
import '../../assets/styled/Headers/headChangeEmail.css';

function HeadChangeEmail() {
    const onC = (e) =>{
        e.preventDefault();
        let x = document.querySelector(".opcNavigateCEmail");
        if(x.style.display === 'none'){
            x.style.display = 'block'
        }
        else{
            x.style.display = 'none';
        }
    }
    return ( 
        <>
            <header className="headCEmail">
                    <div className="logoContainerHeadCEmail">
                        <img src={Logo} className="imgLogoN"/>
                    </div>
                    <Title
                    propsTitleVist3
                    msn="Cambiar Correo"/>
                    <div className="">  
                        <button className="btnImgHam" id="opc" onClick={onC}></button>  
                    </div>
                </header>

            <div className="containerOpcCEmail">
                <div className="opcNavigateCEmail" id="opcNCEmail">
                    <nav className="naVigate">
                        <div className="redirVistCEmail">
                            <Link className="links" to="/perfil">Perfil</Link>
                        </div>
                        <div className="redirVistCEmail">
                            <Link className="links">Seguridad</Link>
                        </div>
                        <div className="redirVistCEmail">
                            <Link className="links" to="/">Cerrar Sesion</Link>
                        </div>
                    </nav>  
                </div>
            </div>
        </>
     );
}

export default HeadChangeEmail;