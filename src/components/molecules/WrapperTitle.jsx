import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle";

function WrapperTitle({msnTitle, msnSub}) {
    return (
        <div>
            <Title msn={msnTitle}/>
            <SubTitle msn={msnSub}/>
        </div>
        
    );
}

export default WrapperTitle;