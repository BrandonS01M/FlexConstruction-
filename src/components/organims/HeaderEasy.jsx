import styled from "styled-components";
import { Link } from "react-router-dom";
import WrapperLogoD from "../molecules/WrapperLogoD";

const Styled = styled.header`
    background-color: White;
    display: flex;
    flex-direction: unset;
    .link{
        text-decoration: none;
        color: white;
        display: flex;
        margin: 0 9% 0 0;
    }
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        background-color: white;
        display: flex;
        flex-direction: unset;
        .link{
            text-decoration: none;
            color: white;
            display: flex;
            margin: 0 9% 0 0;
        }
        .group-one{
            width: 30%;
            margin: 0 65% 0 0;
        }
        .group-two{

        }
    }
`

function HeaderAdministration() {
    return ( 
        <Styled>
            <div className="group-one">
                <WrapperLogoD one_prop/>
            </div>
            <div className="group-two">
                <Link className="link" to={"/login"}>Cerrar Sesion</Link>
            </div>
        </Styled>
     );
}

export default HeaderAdministration;