import SubTitle from "../atoms/SubTitle";
import Text from "../atoms/Text";

function WrapperText({msnSub, msnTxt}) {
    return (
        <>
            <div>
                <SubTitle msn={msnSub}/>
            </div>
            <div>
                <Text msn={msnTxt}/>
            </div>
        </>
    );
}

export default WrapperText;