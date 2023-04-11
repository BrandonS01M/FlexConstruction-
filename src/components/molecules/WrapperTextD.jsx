import styled from "styled-components";
import SubTitleD from "../atoms/SubTitleD";
import ImgD from "../atoms/ImgD";
import TextD from "../atoms/TextD";

const StyledDiv = styled.div`
    .contentSub{
    display: flex;
    background-color:  #101820;
    margin: 5% 7% 5% 0;
    border-radius: 20px;
    width: 60%;
    }

    .contentTxt{
        margin: 2% 0;
        width: 80%;
    }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        display: flex;
        .contentSub{
            display: flex;
            background-color:  #101820;
            margin: 5% 7% 5% 0;
            border-radius: 20px;
            width: 60%;
        }
        .contentTxt{
            margin: 2% 0;
            width: 80%;
        }
    }
`;

function WrapperTextD({msnSub, msnTxt, txt, subH, iconWorks, txtH, src, alt}) {
    return (
        <StyledDiv>
            <div className="contentSub">
                <ImgD src={src} alt={alt} iconWorks={iconWorks}/>
                <SubTitleD msn={msnSub} subH={subH}/> 
            </div>
            <div className="contentTxt">
                <TextD msn={msnTxt} txt={txt} txtH={txtH}/>
            </div>
        </StyledDiv>
    );
}

export default WrapperTextD;