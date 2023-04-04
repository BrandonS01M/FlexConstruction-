import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logos/LogoNormal.svg";
import Title from "../atoms/Title";
import '../../assets/styled/Headers/HeadPay.css';

function HeadPay() {
    return ( 
        <>
            <header className="headPay">
                    <div className="logoContainerHeadPay">
                        <img src={Logo} className="imgLogoN"/>
                    </div>
                    <div className="">  
                    
                    </div>
                </header>

        </>
     );
}

export default HeadPay;