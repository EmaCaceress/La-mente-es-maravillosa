import Input from "./Input";
import {ArrayInputs} from "../utils/Cards.js"; 

const Form = () => {
    return(
        <section class="form__contact">
            <Input input={ArrayInputs}></Input>
            <button className="button__contact">Enviar</button>
        </section>
    );

}

export default Form; 