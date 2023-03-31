import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logos/LogoNormal.svg';
import '../../assets/styled/Wrappers/WrapperHeadTy3.css';

function WrapperHeadTy3({to}) {
    return (  
        <>
            <header className="headerChangePass">
                <div className="logoContainerHead">
                    <img src={Logo} alt="imagen de aqui" className="imgLogoN"/>
                </div>
                <div className="redirecciones">
                    <Link to={to} className="redir">Regresar</Link>
                </div>

            </header>
        </>
    );
}

export default WrapperHeadTy3;