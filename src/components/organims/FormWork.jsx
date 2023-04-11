import styled from "styled-components";
import WrapperAccordion from "../molecules/WrapperAccordion";
import WrapperInputD from "../molecules/WrapperInputD";
import TitleD from "../atoms/TitleD";

const StyledFW = styled.form`
    .Proyect-form{
        position: absolute;
        width: 80%;
        margin: 1% 10%;
        display: flex;
        flex-direction: column;
        padding: 3% 3%;
        align-items: center;
        flex-wrap: wrap;
        z-index: 1;
    }
    .content-input-name{
        width: 80%;
        margin: 0 10% 0 10%;
    }
    .constent-group-wrappers{
        width: 80%;
        margin: 0 10% 0 10%;
    }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        .content-input-name{
            width: 60%;
            margin: 0 20% 0 20%;
        }
        .constent-group-wrappers{
            width: 60%;
            margin: 0 20% 0 20%;
        }
    }
`;

function FormWork() {
    return (
        <StyledFW className="Proyect-form">
            <div>
                <TitleD msn="Crea tu proyecto" propsT/>
            </div>
            <div className="content-input-name">
                <WrapperInputD msn={"Elija un nombre para su Proyecto:"} type={"text"} placeholder={"casa-habitación"} one_prop/>
            </div>
            <div className="constent-group-wrappers">
                <WrapperAccordion msn="item #1" placeholderone="pregunta 1" placeholdertwo="pregunta 2" placeholderthree="pregunta 3" placeholderfour="pregunta 4" data="Terminar" props propsB propIcon/>
                <WrapperAccordion msn="item #2" placeholderone="pregunta 5" placeholdertwo="pregunta 6" placeholderthree="pregunta 7" placeholderfour="pregunta 8" data="Terminar" props propsB propIcon/>
                <WrapperAccordion msn="item #3" placeholderone="pregunta 9" placeholdertwo="pregunta 10" placeholderthree="pregunta 11" placeholderfour="pregunta 12" data="Terminar" props propsB propIcon/>
            </div>
        </StyledFW>
    );
}

export default FormWork;
