import { Link } from "react-router-dom";
import FormRegister from "../components/organims/FormRegister";
import Logo from "../assets/img/Logos/LogoNormal.svg";
import '../assets/styled/Register.css'

function Register() {
    return ( 
        <>
        <div className="register">
        <header className="headerLogin">
                <div className="logoContainerHead">
                    <img src={Logo} alt="imagen de aqui" className="imgLogoN"/>
                </div>
                <div className="redirecciones">
                    <Link to="/login" className="redir">Regresar</Link>
                </div>

            </header>
                <FormRegister/>

        </div>
        </>
     );
}

export default Register;