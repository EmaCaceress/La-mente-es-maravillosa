const Input = ({input}) =>{

    return(
        <>

            {
                input.map(element =>
                <div className="form__containerInput">    
                <p>{element.title}</p>
                <input className={element.className} type="text" placeholder={element.placeholder}/>
                </div>
                )
            }
        
        </>
    );
}

export default Input;