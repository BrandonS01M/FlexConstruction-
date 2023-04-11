import styled from "styled-components";
import TextD from "../atoms/TextD";
import SummaryD from "../atoms/SummaryD";

const StyledDetails = styled.details`
    width: 100%;
    background-color: #0ff4f444;
    padding: 1.5%;
    border-radius: 6px;
    cursor: pointer;
    .content-text{
        background-color: rgba(16, 24, 32, 0.874);
        margin: 0 1% 0 1%;
        border-radius: 0 0 15px 15px;
        text-align: justify;
    }
    summary{
        align-items: none;
    }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        width: 100%;
        border-radius: 6px;
        cursor: pointer;
        padding: 1.5%;
        background-color: #0ff4f444;
        .content-text{
            background-color: rgba(16, 24, 32, 0.874);
            margin: 0 1% 0 1%;
            border-radius: 0 0 15px 15px;
            text-align: justify;
        }
        summary{
            align-items: none;
        }
    }
`;

function WrapperAcordionTex({title, txt}) {
    return ( 
        <StyledDetails>
            <SummaryD msn={title} one_prop/>
            <div className="content-text">
                <TextD msn={txt} two_prop/>
            </div>
        </StyledDetails>
     );
}

export default WrapperAcordionTex;