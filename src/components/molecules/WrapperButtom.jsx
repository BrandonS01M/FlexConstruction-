import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Img from "../atoms/Img";

function WrapperButtom({data, text, src, msn_one, msn_two, msn_three, srcTxt, propBtnH, propsBtnCanceled }) {
    return (
        <>
            <div>
                <Text msn={msn_one}/>
                <Text msn={msn_two}/>
                <Img src={srcTxt}/>
                <Text msn={msn_three}/>
            </div>
            <div>
                <Button data={data} text={text} src={src} propBtnH={propBtnH} propsBtnCanceled={propsBtnCanceled}/>
            </div>
        </>
    );
}

export default WrapperButtom;