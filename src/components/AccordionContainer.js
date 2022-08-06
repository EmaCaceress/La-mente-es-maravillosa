import Accordion from "./Accordion";
import { ArrayAccordion } from "../utils/Cards";
import { useEffect } from "react";

const AccordionContainer = () => {


    useEffect(()=>{
        const bloque    = document.querySelectorAll('.bloque')
        const h2        = document.querySelectorAll('.h2')
            

        // Cuando CLICK en h2,
            // QUITAR la clase activo de TODOS los bloque
            // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

        // Recorrer TODOS los h2
        h2.forEach( ( cadaH2 , i )=>{
            // Asignando un CLICK a cada h2
            h2[i].addEventListener('click', ()=>{

                // Recorrer TODOS los bloque
                bloque.forEach( ( cadaBloque , i )=>{
                    // Quitamos la clase activo de TODOS los bloques
                    bloque[i].classList.remove('activo')
                })
                // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
                // (Línea número 12)
                bloque[i].classList.add('activo')

            })
        })
    });
    return(
        <>
            <section class="Accordion">
                <Accordion accordion={ArrayAccordion} ></Accordion>
            </section>
        </>
    );
}

export default AccordionContainer;