import TitleMedium from "../atoms/TitleMedium";
import SubTitleMedium from "../atoms/SubTitleMedium";

function WrapperDataInfo({msnTitleM, msnSubTitleM}) {
    return ( 
        <>
            <TitleMedium msn={msnTitleM}/>
            <SubTitleMedium msn={msnSubTitleM}/>
        </>
     );
}

export default WrapperDataInfo;