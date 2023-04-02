import WrapperPhoto from "../components/molecules/WrapperPhoto";
import WrapperTexture from "../components/molecules/WrapperTexture";
import HeadPassChan from "../components/organims/HeadPassChan";
import FormPassChan from "../components/organims/FormPassChan";
import Title from "../components/atoms/Title";
import '../assets/styled/PasswordChange.css';

function PasswordChange() {
    return ( 
        <>
          <HeadPassChan />
          <WrapperTexture/>
          <Title 
          propsTitleVist
          className="titleVisit"
          msn="Cambio de Contraseña"/>
          <WrapperPhoto/>
          <FormPassChan/>
        </>
     );
}

export default PasswordChange;