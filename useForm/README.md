# useForm Hook

Ejemplo de uso:
```
const initialForm = {
    name: '',
    age: 0,
    email: ''
};

const [formState, handleInputChange, reset]= useForm( initialForm );

```