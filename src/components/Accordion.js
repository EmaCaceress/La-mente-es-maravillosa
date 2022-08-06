const Accordion = ({accordion}) =>{

    return(
  
<div class="acordeon">
            {
                accordion.map(element =>

        <div class="bloque">
            <h2 class="h2">{element.title}</h2>
            <div class="contenido">{element.description}</div>
        </div>
      

                )
            }
    </div>
    );
}

export default Accordion;