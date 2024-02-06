import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../slice/TodoSlice";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
       e.preventDefault();
       if(!todo) return;
       dispatch(addTodos({todo, completed: false}))
       setTodo("");
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;