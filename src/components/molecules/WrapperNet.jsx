import Email from '../../assets/img/Email.svg';
import Facebook from '../../assets/img/Facebook.svg';
import Instagram from '../../assets/img/Instagram.svg';
import Twitter from '../../assets/img/Twitter.svg';
import Youtube from '../../assets/img/Youtube.svg';
import '../../assets/styled/WrapperNet.css';


function WrapperNet() {
    return ( 
        <>
        <div className="containerNet">
            <a href="ProyectFlexIS@gmail.com">
                <img src={Email} className="imgNet"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100091258720397&mibextid=ZbWKwL">
                <img src={Facebook} className="imgNet"/>
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=ggvdq0nv10z5&utm_content=r4gd4i7">
                <img src={Instagram} className="imgNet"/>
            </a>
            <a href="https://twitter.com/FlexContruction?t=TzA6l6hqArZmrgAnnp_jqQ&s=09">
                <img src={Twitter} className="imgNet"/>
            </a>
            <a href="https://www.youtube.com/@FlexConstruction">
                <img src={Youtube} className="imgNet" id='yout'/>
            </a>
        </div>
        </>
     );
}

export default WrapperNet;