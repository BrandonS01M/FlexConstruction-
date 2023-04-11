import styled from "styled-components";
import ImgD from "../atoms/ImgD";
import List from "../atoms/List";
import Menu from "../../assets/img/menu.svg"

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    .item{
        display: flex;
    }
    #btn-menu{
        display: none;
    }
    .content-nav{
        background-color: antiquewhite;
        width: 65%;
        display: flex;
        align-items: center;
        height: 100%;
    }
    ul{
        list-style-type: none;
    }
    a{
        color: white;
        text-decoration: none;
    }
    .items-li{
        padding: 1% 0;
        font-size: 1rem;
        background-color: white;
        border: 2px solid white;
    }
    .opcNavigate{
        margin: 10% 0 0 5%;
        position: fixed;
        height: 20%;
        width: 25%;
        border-radius: 20px;
        background-color: #ffffff;
        display: none;
    }
    .containerOpc{
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: end;
    }
    .button-menu{
        width: 100%;
        margin: 5% 0 5% 100%;
        background-color: white;
        border: 0;
    }
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        display: flex;
        width: 100%;
        height: 100%;
        text-decoration: none;
        .item{
            display: flex;
        }
        #btn-menu{
            display: none;
        }
        .content-nav{
            background-color: antiquewhite;
            width: 65%;
            display: flex;
            align-items: center;
            height: 100%;
        }
        ul{
            list-style-type: none;
        }
        a{
            color: white;
            text-decoration: none;
        }
        .items-li{
            padding: 1% 0;
            font-size: 1rem;
            background-color: #242439;
            border: 2px solid white;
        }
        .opcNavigate{
            margin: 4.8% 0 0 16%;
            position: fixed;
            height: 40%;
            width: 13%;
            border-radius: 20px;
            background-color: #ffffff;
            display: none;
        }
        .containerOpc{
            width: 100%;
            position: fixed;
            display: flex;
            justify-content: end;
        }
        .button-menu{
            width: 150%;
            margin: 15% 0 15% 650%;
            border: 0;
        }
        ${props => props.menu &&`
            .opcNavigate{
                margin: 4.8% 0 0 16%;
                position: fixed;
                height: 40%;
                width: 13%;
                border-radius: 20px;
                background-color: #ffffff;
                display: none;
            }
            .containerOpc{
                width: 100%;
                position: fixed;
                display: flex;
                justify-content: end;
                z-index: 1;
            }
        `}
    }
`;

function WrapperNav({src, to_one, to_two, to_three, item_one, item_two, item_three, one_prop}) {
    const onC = (e) =>{
        e.preventDefault();
        let x = document.querySelector(".opcNavigate");
        if(x.style.display === 'none'){
            x.style.display = 'block'
        }
        else{
            x.style.display = 'none';
        }
    }
    return (
        <StyledDiv menu={one_prop}>
            <div className="content-button-menu">
                <button className="button-menu" id="opc" onClick={onC}><ImgD src={Menu} menuI/></button>
            </div>
            <div className="containerOpc">
                <div className="opcNavigate" id="opc">
                    <nav>
                        <ul>
                            <List to={to_one} msn={item_one} />
                            <List to={to_two} msn={item_two} />
                            <List to={to_three} msn={item_three} />
                        </ul>
                    </nav>
                </div>
            </div>
        </StyledDiv>
    );
}

export default WrapperNav;