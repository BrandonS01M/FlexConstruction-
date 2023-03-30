import { Link } from "react-router-dom";
import FormLogin from "../components/organims/FormLogin";
import Logo from "../assets/img/Logos/LogoNormal.svg";
import "../assets/styled/Login.css";

function Login() {
    return ( 
        <div className="login">
            <header className="headerLogin">
                <div className="logoContainerHead">
                    <img src={Logo} alt="imagen de aqui" className="imgLogoN"/>
                </div>
                <div className="redirecciones">
                    <Link to="/" className="redir">Regresar</Link>
                </div>

            </header>
            <FormLogin/>
        </div>
    );
}

export default Login;