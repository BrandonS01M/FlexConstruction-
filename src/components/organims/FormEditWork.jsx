import styled from "styled-components";
import WrapperAccordion from "../molecules/WrapperAccordion";
import TitleD from "../atoms/TitleD";
import SubTitleD from "../atoms/SubTitleD";
import IconEdit from "../../assets/img/Icon_4.svg";

const StyledFEW = styled.form`
    .name-proyect{
        font-size: 1rem;
        text-align: center;
    }
    .constent-group-wrappers{
            width: 80%;
            margin: 0 10% 0 10%;
    }
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        .constent-group-wrappers{
            width: 60%;
            margin: 0 20% 0 20%;
        }
        .name-proyect{
            width: 60%;
            margin: 0 20% 0 20%;
            text-align: center;
        }
    }
`; 

function FormEditWork() {
    return (
        <StyledFEW  >
            <TitleD msn="Edicion de proyecto" propsT/>
            <div className="name-proyect">
                <SubTitleD msn="Nombre de proyecto:" propsNP/>
                <SubTitleD msn={"..."}/>
            </div>
            <div className="constent-group-wrappers">
                <WrapperAccordion msn="item #1" src={IconEdit} placeholderone="pregunta 1" placeholdertwo="pregunta 2" placeholderthree="pregunta 3" placeholderfour="pregunta 4" data="Terminar" props propsB propIcon/>
                <WrapperAccordion msn="item #2" src={IconEdit} placeholderone="pregunta 5" placeholdertwo="pregunta 6" placeholderthree="pregunta 7" placeholderfour="pregunta 8" data="Terminar" props propsB propIcon/>
                <WrapperAccordion msn="item #3" src={IconEdit} placeholderone="pregunta 9" placeholdertwo="pregunta 10" placeholderthree="pregunta 11" placeholderfour="pregunta 12" data="Terminar" props propsB propIcon/>
            </div>
        </StyledFEW>
    );
}

export default FormEditWork;