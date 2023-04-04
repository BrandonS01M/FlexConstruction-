import WrappertextureAs from "../components/molecules/WrapperTextureAS";
import HeadSecurity from "../components/organims/HeadSecurity";
import WrapperPhoto from "../components/molecules/WrapperPhoto";
import FormSecurity from "../components/organims/FormSecurity";
import Title from "../components/atoms/Title";
import '../assets/styled/AccountSecurity.css';

function AccountSecurity() {
    return ( 
        <>
            <HeadSecurity/>
            <WrappertextureAs/>
            <Title 
            propsTitleVist
            className="titleVisit"
            msn="Seguridad de Cuenta"/>
            <WrapperPhoto className="photo"/>
            <FormSecurity/>
        </>
     );
}

export default AccountSecurity;