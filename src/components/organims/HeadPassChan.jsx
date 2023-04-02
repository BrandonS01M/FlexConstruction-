import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logos/LogoNormal.svg";
import Title from "../atoms/Title";
import '../../assets/styled/Headers/HeadPassChan.css';


function HeadPassChan({msnT}) {
    const onC = (e) =>{
        e.preventDefault();
        let x = document.querySelector(".opcNavigatePass");
        if(x.style.display === 'none'){
            x.style.display = 'block'
        }
        else{
            x.style.display = 'none';
        }
    }
    return ( 
        <>
                <header className="headPassChan">
                    <div className="logoContainerHeadPass">
                        <img src={Logo} className="imgLogoN"/>
                    </div>
                    <Title
                    propsTitleVist3
                    msnT={msnT} msn="Cambio de Constraseña"/>
                    <div className="">  
                        <button className="btnImgHam" id="opc" onClick={onC}></button>  
                    </div>
                </header>

            <div className="containerOpcPass">
                <div className="opcNavigatePass" id="opcNPass">
                    <nav className="naVigate">
                        <div className="redirVistPass">
                            <Link className="links" to="/perfil">Perfil</Link>
                        </div>
                        <div className="redirVistPass">
                            <Link className="links">Seguridad</Link>
                        </div>
                        <div className="redirVistPass">
                            <Link className="links" to="/">Cerrar Sesion</Link>
                        </div>
                    </nav>  
                </div>
            </div>
        </>
     );
}

export default HeadPassChan;