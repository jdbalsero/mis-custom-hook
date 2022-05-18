import { useState } from "react";

export const useForm = (initialState = {}) => {
    //Se usa InitialState como argumento para que aplique a cualquier tipo de formulario
    const [formState, setFormState] = useState(initialState);

    const reset = () => {
        setFormState(initialState);
    }

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return [formState, handleInputChange, reset];   
    
}
