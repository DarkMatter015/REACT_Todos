import "./to-do-form.style.css";

import { Button } from "../Button";
import { TextInput } from "../TextInput";


export function ToDoForm ( { onSubmit, defaultValue } ) {
    return (
        <form action={onSubmit} className="todo-form">
            <TextInput 
            placeholder="Digite aqui uma nova tarefa"
            required
            name="description"
            defaultValue={defaultValue}
            />
            <Button>Salvar Item</Button>
        </form>
    )
}