import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logos/LogoNormal.svg";
import Title from "../atoms/Title";
import '../../assets/styled/Headers/HeadEditPerfil.css';

function HeadEditPerfil() {
    const onC = (e) =>{
        e.preventDefault();
        let x = document.querySelector(".opcNavigateEditP");
        if(x.style.display === 'none'){
            x.style.display = 'block'
        }
        else{
            x.style.display = 'none';
        }
    }
    return (  
        <>

                <header className="headEditPerfil">
                    <div className="logoContainerHeadEditPerfil">
                        <img src={Logo} className="imgLogoN"/>
                    </div>
                    <Title
                    propsTitleVist3
                    msn="Editar Perfil"/>
                    <div className="">  
                        <button className="btnImgHam" id="opc" onClick={onC}></button>  
                    </div>
                </header>

            <div className="containerOpcEditPerfil">
                <div className="opcNavigateEditP" id="opcNEditPerfil">
                    <nav className="naVigate">
                        <div className="redirVistEditPerfil">
                            <Link className="links" to="/perfil">Perfil</Link>
                        </div>
                        <div className="redirVistEditPerfil">
                            <Link className="links">Seguridad</Link>
                        </div>
                        <div className="redirVistEditPerfil">
                            <Link className="links" to="/">Cerrar Sesion</Link>
                        </div>
                    </nav>  
                </div>
            </div>
        
        </>
    );
}

export default HeadEditPerfil;