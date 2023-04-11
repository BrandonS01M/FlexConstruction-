import styled from "styled-components";
import ComponentButton from "../atoms/ComponentButton";
import TextD from "../atoms/TextD";
import Img from "../atoms/Img";

const StyledDiv = styled.div`
    .contentGrup{
        padding: 6% 0;
        border-radius: 30px;
        border: 1px solid white;
        margin: 5% 10%;
        width: 80%;
    }

    .containerImg{
        display: flex;
    }

    .Buttom{
        width: 100%;
        padding: 1% 0%;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0px -2px 2px rgba(0, 0, 0, 0.25);
    }

    .background{
        background: #242439;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        .contentGrup{
            padding: 3% 0;
            border-radius: 30px;
            border: 1px solid white;
            margin: 0 8% 0 10% ;
            width: 35%;
            height: 50vh;
        }
        .containerImg{
            display: flex;
            width: 70%;
        }
        .Buttom{
            width: 35%;
            height: 26vh;
            border-radius: 20px;
            margin: 5% 5% 10% 0;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0px -2px 2px rgba(0, 0, 0, 0.25);
        }
    }
`;

function WrapperButtom({data, text, srcBtn, msn_one, msn_two, msn_three, src, propBtnH, infH, imgH, infTxtH}) {
    return (
        <StyledDiv>
            <div className="contentGrup">
                <TextD msn={msn_one} infTxtH={infTxtH}/>
                <TextD msn={msn_two} infTxtH={infTxtH}/>
                <div className="containerImg">
                    <Img src={src} imgH={imgH}/>
                    <TextD msn={msn_three} infH={infH}/>
                </div>
            </div>
            <div className="Buttom">
                <ComponentButton data={data} text={text} src={srcBtn} propBtnH={propBtnH}/>
            </div>
        </StyledDiv>
    );
}

export default WrapperButtom;