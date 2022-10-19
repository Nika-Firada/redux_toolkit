// add imports
import { useState } from "react"
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        //addTodo
        setNewTodo('')
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                <FileDownloadDoneIcon />
            </button>
        </form>


    let content;
    // Define conditional content

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
}
export default TodoList