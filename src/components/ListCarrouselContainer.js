import { useEffect } from "react";
import { Comments } from "../utils/Cards";
import ListCarrousel from "./ListCarrousel";
import article__logo from "../images/article__logo.png"

const ListCarrouselContainer = () =>{

useEffect(()=>{
    const list = document.querySelector('.article__list')
    const li = document.querySelectorAll('.article__li')
    
    
    li.forEach( ( cadaPunto , i )=> {
     
        li[i].addEventListener('click',()=>{
    
        
            let posicion  = i
            
            let operacion = posicion * -(100/3)
    
            list.style.transform = `translateX(${ operacion }%)`
    
            
            li.forEach( ( cadaPunto , i )=>{
                
                li[i].classList.remove('article__li--active')
            })
            
            li[i].classList.add('article__li--active')
    
        })
    })    
});


    return(
        <section className='article__opinions'>
            <div className="article__containerLogo">
                <img src={article__logo} className="article__logo"></img>
            </div>
            <ListCarrousel comments={Comments}/>
            <ul className="article__ul">
                <li className="article__li article__li--active"></li>
                <li className="article__li"></li>
                <li className="article__li"></li>
            </ul>
        </section>
    )
}

export default ListCarrouselContainer;