import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logos/LogoNormal.svg";
import Title from "../atoms/Title";
import '../../assets/styled/Headers/HeadSegurity.css'


function HeadSecurity({msnT}) {
    const onC = (e) =>{
        e.preventDefault();
        let x = document.querySelector(".opcNavigateSegurity");
        if(x.style.display === 'none'){
            x.style.display = 'block'
        }
        else{
            x.style.display = 'none';
        }
    }
    return (
        <>
        <header className="headAccountSegurity">
            <div className="logoContainerHeadSegu">
                <img src={Logo} className="imgLogoN"/>
            </div>
            <Title
            propsTitleVist3
            msnT={msnT} msn="Seguridad de Cuenta"/>
            <div className="">  
                <button className="btnImgHam" id="opc" onClick={onC}></button>  
            </div>
        </header>

    <div className="containerOpcSegurity">
        <div className="opcNavigateSegurity" id="opcNSegurity">
            <nav className="naVigate">
                <div className="redirVistSegurity">
                    <Link className="links" to="/perfil">Perfil</Link>
                </div>
                <div className="redirVistSegurity">
                    <Link className="links">Seguridad</Link>
                </div>
                <div className="redirVistSegurity">
                    <Link className="links" to="/">Cerrar Sesion</Link>
                </div>
            </nav>  
        </div>
    </div>
</>
     );
}

export default HeadSecurity;