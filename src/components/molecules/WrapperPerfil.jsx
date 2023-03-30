import TitleMedium from "../atoms/TitleMedium";
import SubTitleMedium from "../atoms/SubTitleMedium"

function WrapperPerfil({msnTitleM, msnSubTitleM}) {
    return ( 
        <>
            <TitleMedium msn={msnTitleM}/>
            <SubTitleMedium msn={msnSubTitleM}/>
        </>
     );
}

export default WrapperPerfil;