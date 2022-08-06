import {CgCopyright} from "react-icons/cg";
import logo__footer from "../images/logo__footer.png";
import logo__mcontigo from "../images/logo__mcontigo.png";
import redes from "../images/redes.png";

const Footer = () =>{

    return(
        <footer className="footer">
            <img src={logo__footer} className="footer__title"/>
            <img src={logo__mcontigo} className="footer__subtitle"/> 
            <div className="footer__container">
                <h3 className="center">La Mente es Maravillosa is a property of grupo MContigo
                <CgCopyright className="footer__container--icon"/>2021 - 2020. All rihts reserver.</h3>
                <h3 className="center">Los contenidos de esta publicacion se redactan solo con fines
                informativos. En ningun momento pueden server para facilitar
                diagnosticos o sustituir la labor de un profesional. Le
                recomendamos que contacte con su especialista de confianza.</h3>
            </div>
            <hr className="slash-3"/>
            <ul className="footer__ul center">
                <li>Politica de cookies</li>
                <li>Politica de privacidad</li>
                <li>Terminos y condiciones de uso</li>
                <li>Clausula informativa de uso</li>
                <li>  <img src={redes}  className="redes"/></li>
            </ul>
       
            <div className="footer__containerRed">

            </div>
        </footer>
    )
}

export default Footer;