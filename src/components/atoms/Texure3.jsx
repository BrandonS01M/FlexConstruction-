import styled from "styled-components";

const StyledTexture3 = styled.div `

    ${props => props.propsTextureAS && `
        width:100%;
    `}
    .start-1{
        width:12vh;
        height:30vh;
        background-color:#242439;
        border-radius:0px 0px 50px 50px;
    }
    
    .start-2{
        width:12vh;
        height:13vh;
        background-color:#242439;
        border-radius:0px 0px 50px 50px;
    }
    .start-3{
        width:12vh;
        height:6vh;
        background-color:#242439;
        border-radius:0px 0px 50px 50px;
    }

    .end-1{
        width:12vh;
        height:6vh;
        background-color:#242439;
        border-radius:0px 0px 50px 50px;
    }
    .end-2{
        width:12vh;
        height:13vh;
        background-color:#242439;
        border-radius:0px 0px 50px 50px;
    }
    .end-3{
        width:12vh;
        height:30vh;
        background-color:#242439;
        border-radius:0px 0px 50px 50px;
    }
    
    @media screen and (max-width:800px){
        .end-3{
            display:none;
        }
        .start-1{
            display:none;
        }
    }
    @media screen and (min-width:800px){
        .start-3{
            margin-right:10vh;
            height:12vh;
            width:14vh;
            border-radius:0px 0px 90px 90px;
        }
        .end-1{
            margin-left:10vh;
            height:12vh;
            width:14vh;
            border-radius:0px 0px 90px 90px;
        }
        
    }

    @media screen and (min-width:600px){
        .start-1{
            margin-left:4vh;
            width:14vh;
            border-radius:0px 0px 90px 90px;
        }
        .end-3{
            margin-right:4vh;
            width:14vh;
            border-radius:0px 0px 90px 90px;
        }
    }

    @media screen and (min-width:800px){
        .start-2{
            height:20vh;
            width:14vh;
            border-radius:0px 0px 90px 90px;
        }
        .end-2{
            height:20vh;
            width:14vh;
            border-radius:0px 0px 90px 90px;
        }
    }

    @media screen and (min-width:600px){
        .start-1{}
        .start-2{}
        .start-3{}
        .end-1{}
        .end-2{}
        .end-3{}
    }

    .containerTextureF{
        display:flex;
        flex-direction:wrap;
        justify-content: space-between;
        gap:1vh;
        margin:0vh 1vh 0vh 1vh;
    }

    
 
`;

function Texture3({propsTextureAS, className}) {
    return (
        <StyledTexture3 
        propsTextureAS={propsTextureAS}
        className={className}>
            <main className="containerTextureF">

            <div className="start-1"></div>
            <div className="start-2"></div>
            <div className="start-3"></div>
            <div className="end-1"></div>
            <div className="end-2"></div>
            <div className="end-3"></div>

            </main>
        </StyledTexture3>
    );
}

export default Texture3;