import Label from "../atoms/Leabel";
import Input from "../atoms/Input";


function WrapperInput({type, name, idL, idI, msn, value, color}) {
    return (
        <div>
            <Label id={idL} msn={msn}/>
            <Input type={type} name={name} id={idI} value={value} color={color}/>
        </div>
    );
}

export default WrapperInput;