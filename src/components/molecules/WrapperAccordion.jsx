import Button from "../atoms/Button"
import Input from "../atoms/Input";
import Summary from "../atoms/Summary";
import "../../assets/styled/WrapperAccordion.css"

function WrapperAccordion({msn, src, data, propIcon, propsB, props, placeholderone, placeholdertwo, placeholderthree, placeholderfour, type, idone, idtwo, idthree, idfour, nameone, nametwo, namethree, namefour}) {
    return (
        <details>
            <Summary msn={msn} src={src} propIcon={propIcon}/>
            <div>
                <Input type={type} name={nameone} id={idone} props={props} placeholder={placeholderone}/>
                <Input type={type} name={nametwo} id={idtwo} props={props} placeholder={placeholdertwo}/>
                <Input type={type} name={namethree} id={idthree} props={props} placeholder={placeholderthree}/>
                <Input type={type} name={namefour} id={idfour} props={props} placeholder={placeholderfour}/>
                <Button data={data} propsB={propsB}/>
            </div>
        </details>
    );
}

export default WrapperAccordion;