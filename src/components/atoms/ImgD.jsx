import styled from "styled-components";

const StyledImg = styled.img`
    ${props => props.iconDE &&`
        width: 40%;
        padding: 1% 1%;
        margin: 1% 0 0 35%;
    `}
    ${props => props.iconLook &&`
        width: 40%;
        padding: 1% 1%;
        margin: 8% 0 0 75%;
    `}
    ${props => props.iconWorks && `
        width: 15%;
        margin: 0 7%;
    `}
    ${props => props.imgH && `
        width: 50%;
        margin: 0 0 0 5%;
    `}
    ${props => props.menuI && `
        margin: 11% 0 0 0;
        width: 70%;
        background-color: none;
    `}
    @media screen and (min-width: 1920px) and (max-width: 2160px) {
        ${props => props.iconDE &&`
            width: 40%;
            padding: 1% 1%;
            margin: 1% 0 0 35%;
        `}
        ${props => props.iconLook &&`
            width: 40%;
            padding: 1% 1%;
            margin: 8% 0 0 75%;
        `}
        ${props => props.iconWorks && `
            width: 15%;
            margin: 0 7%;
        `}
        ${props => props.imgH && `
            width: 50%;
            margin: 0 0 0 5%;
        `}
        ${props => props.menuI && `
            width: 100%;
            background-color: none;
        `}
    }
`;

function ImgD({src, alt, iconLook, iconDE, iconWorks,propsAccordion, imgH, menuI, background}) {
    return (
        <StyledImg src={src} alt={alt} menuI={menuI} iconWorks={iconWorks} iconLook={iconLook} iconDE={iconDE} propsAccordion={propsAccordion} imgH={imgH} background={background}/>
    );
}

export default ImgD;