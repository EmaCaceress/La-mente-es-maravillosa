import {BiMenu} from "react-icons/bi";
import LiComp from "./LiComp";
import {Link} from 'react-router-dom';

const Aside = () =>{

    const openToMenu = () =>{
        const aside=document.querySelector("aside");
        console.log(aside);
        aside.classList.toggle("view");
    }

    return(
        <aside class="aside" >
            <button className="aside__button"><BiMenu className="aside__button--icon"/></button>
            <ul class="aside__ul--mobile" >
                <h1>La Mente es Maravillosa</h1>
                <LiComp title="Embarazo" subtitles={["Quiero ser mama","Voy a ser mama","Parto"]}/>
                <LiComp title="Educacion" subtitles={["Aprende a ser mama","Educacion para bebes","Educacion para niños"]}/>
                {/* <li><Link className="category" to="/contact">Contactos</Link></li> */}
                <li className="aside__li"><Link style={{textDecoration:"none", color:"#B378FF"}}to="/FAQ">FAQ</Link></li>
                <li className="aside__li"><Link style={{textDecoration:"none", color:"#B378FF"}}to="/contact">Contactos</Link></li>
            </ul>
            <ul class="aside__ul--desktop" >
               <li className="aside__li">Embarazo</li>
               <li className="aside__li">Educacion</li>
               <li className="aside__li" ><Link style={{textDecoration:"none", color:"#B378FF"}}to="/FAQ">FAQ</Link></li>
               <li className="aside__li"><Link  style={{textDecoration:"none", color:"#B378FF"}}to="/contact">Contactos</Link></li>
            </ul>
        </aside>
    )
}

export default Aside;