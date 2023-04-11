import styled from "styled-components";
import TitleD from "../atoms/TitleD";
import "../../assets/styled/TextureTitle.css";

const StyledDiv = styled.div`
    width: 100%;
    height: 20vh;
`;

function TextureTitle({msn, next, TMW}) {
    return (
        <StyledDiv>
            <div className="texture">
                <TitleD TMW={TMW} msn={msn} next={next}/>
            </div>   
        </StyledDiv> 
    );

}
export default TextureTitle;