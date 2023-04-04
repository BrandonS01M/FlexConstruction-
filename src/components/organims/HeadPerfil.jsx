import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logos/LogoNormal.svg";
import Title from "../atoms/Title";
import '../../assets/styled/Headers/HeadPerfil.css';

function HeadPerfil() {
    const onC = (e) =>{
        e.preventDefault();
        let x = document.querySelector(".opcNavigatePerfil");
        if(x.style.display === 'none'){
            x.style.display = 'block'
        }
        else{
            x.style.display = 'none';
        }
    }
    return ( 
        <>

                <header className="headPerfil">
                    <div className="logoContainerHeadPerfil">
                        <img src={Logo} className="imgLogoN"/>
                    </div>
                    <Title
                    propsTitleVist3
                    msn="Perfil"/>
                    <div className="">  
                        <button className="btnImgHam" id="opc" onClick={onC}></button>  
                    </div>
                </header>

            <div className="containerOpcPerfil">
                <div className="opcNavigatePerfil" id="opcNPerfil">
                    <nav className="naVigate">
                        <div className="redirVistPerfil">
                            <Link className="links" to="/editperfil">Editar perfil</Link>
                        </div>
                        <div className="redirVistPerfil">
                            <Link className="links" to="/account_security">Seguridad</Link>
                        </div>
                        <div className="redirVistPerfil">
                            <Link className="links" to="/">Volver</Link>
                        </div>
                        <div className="redirVistPerfil">
                            <Link className="links" to="/">Cerrar Sesion</Link>
                        </div>
                    </nav>  
                </div>
            </div>
        
        </>
     );
}

export default HeadPerfil;