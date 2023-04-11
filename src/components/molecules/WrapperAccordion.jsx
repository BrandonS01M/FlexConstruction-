import styled from "styled-components";
import ButtonD from "../atoms/ButtonD"
import Input from "../atoms/Input";
import SummaryD from "../atoms/SummaryD";

const StyledWA = styled.details`
    width: 100%;
    background-color: azure;
    padding: .5rem;
    border-radius: 6px;
    cursor: pointer;
    margin: 2% 0;

    summary{
        align-items: none;
    }
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        width: 100%;
        background-color: azure;
        padding: .5rem;
        border-radius: 6px;
        cursor: pointer;
        margin: 2% 0;
        summary{
            align-items: none;
        }
        .content-wrapper{
            width: 100%;
        } 
    }
`;

function WrapperAccordion({msn, src, data, propIcon, propsB, props, placeholderone, placeholdertwo, placeholderthree, placeholderfour, type, idone, idtwo, idthree, idfour, nameone, nametwo, namethree, namefour}) {
    return (
        <StyledWA>
            <SummaryD msn={msn} src={src} propIcon={propIcon}/>
            <div className="content-wrapper">
                <Input type={type} name={nameone} id={idone} props={props} placeholder={placeholderone}/>
                <Input type={type} name={nametwo} id={idtwo} props={props} placeholder={placeholdertwo}/>
                <Input type={type} name={namethree} id={idthree} props={props} placeholder={placeholderthree}/>
                <Input type={type} name={namefour} id={idfour} props={props} placeholder={placeholderfour}/>
                <ButtonD data={data} propsB={propsB}/>
            </div>
        </StyledWA>
    );
}

export default WrapperAccordion;