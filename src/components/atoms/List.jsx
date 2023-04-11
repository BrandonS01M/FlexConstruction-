import {Link} from "react-router-dom"
import styled from "styled-components";

const StyledList = styled.li`

`;

function List({to, msn}) {
    return ( 
        <StyledList><Link to={to}>{msn}</Link></StyledList>
    );
}

export default List;