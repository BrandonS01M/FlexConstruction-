import styled from "styled-components";
import TitleD from "../atoms/TitleD"
import ImgD from "../atoms/ImgD";

const StyledDiv = styled.div`
    border-radius: 20px;
    width: 100%;
    margin: 3% 0 3% 0;
    display: flex;
    height: 10%;
    background-color: #101820;
    color: white;
    .Icon{
        width: 100%;
    }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        border-radius: 20px;
        width: 90%;
        margin: 1% 5% 1% 5%;
        display: flex;
        height: 6vh;
        background-color: #101820;
        color: white;
        .Icon{
            margin: .5% 0 .5% 0;
            width: 10%;
        }
        .contentName{
            margin: 0 55% 0 0;
        }
    }
`;

function WrapperWorks({msn,srcIconOne, srcIconTwo, iconLook, iconDE,TW}) {
    return (
        <StyledDiv>
            <div className="contentName">
                <TitleD msn={msn} TW={TW}/>
            </div>
            <div className="Icon">
                <a href=""><ImgD src={srcIconOne} iconLook={iconLook}/></a>
            </div>
            <div className="Icon">
                <a href=""><ImgD src={srcIconTwo} iconDE={iconDE}/></a>
            </div>
        </StyledDiv>
    );
}

export default WrapperWorks;