import {useState} from "react";
import './BookForm.css';

function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && author){
            //dispatch action
            setTitle('')
            setAuthor('')
        }

    }
    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='author'>Author: </label>
                    <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default BookForm;
