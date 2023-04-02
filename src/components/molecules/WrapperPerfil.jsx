import TitleMedium from "../atoms/TitleMedium";
import InputsC from "../atoms/InputsC";

function WrapperPerfil({msnTitleM, idTitleM}) {
    return ( 
        <>
            <TitleMedium msn={msnTitleM} id={idTitleM}/>
            <InputsC propsInputsChange/>
        </>
     );
}

export default WrapperPerfil;