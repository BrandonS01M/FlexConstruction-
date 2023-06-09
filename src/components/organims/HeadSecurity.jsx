import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logos/LogoNormal.svg";
import Title from "../atoms/Title";
import '../../assets/styled/Headers/HeadSecurity.css';

function HeadSecurity() {
    const onC = (e) =>{
        e.preventDefault();
        let x = document.querySelector(".opcNavigateSecurity");
        if(x.style.display === 'none'){
            x.style.display = 'block'
        }
        else{
            x.style.display = 'none';
        }
    }
    return ( 
        <> 
                <header className="headSecurity">
                    <div className="logoContainerHeadSecurity">
                        <img src={Logo} className="imgLogoN"/>
                    </div>
                    <Title
                    propsTitleVist3
                    msn="Seguridad de cuenta"/>
                    <div className="">  
                        <button className="btnImgHam" id="opc" onClick={onC}></button>  
                    </div>
                </header>

            <div className="containerOpcSecurity">
                <div className="opcNavigateSecurity" id="opcNSecurity">
                    <nav className="naVigate">
                        <div className="redirVistSecurity">
                            <Link className="links" to="/perfil">Perfil</Link>
                        </div>
                        <div className="redirVistSecurity">
                            <Link className="links" to="/account_security">Seguridad</Link>
                        </div>
                        <div className="redirVistSecurity">
                            <Link className="links" to="/">Cerrar Sesion</Link>
                        </div>
                    </nav>  
                </div>
            </div>

        </>
     );
}

export default HeadSecurity;