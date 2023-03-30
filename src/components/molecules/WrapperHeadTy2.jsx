import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logos/LogoNormal.svg";
import Title from "../atoms/Title";
import '../../assets/styled/Wrappers/WrapperHeadTy2.css'
function WrapperHeadTy2 () {
    
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
            <header className="headerPrinci">
                <div className="logoContainerHead">
                    <img src={Logo} className="imgLogoN"/>
                </div>
                <Title
                propsTitleVist2
                msn="Editar Perfil"/>
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
        </>
     );
}

export default WrapperHeadTy2;