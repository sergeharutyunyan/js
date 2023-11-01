import React from 'react';
import Button from "../UI/Button";
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import styles from './TodosActions.module.css'
function TodosActions(props) {
    const {deleteCompetedTodos, resetTodos, completedTodosExist} = props
    return (
        <div className={styles.todosActionContainer}>

            <Button title='Reset Todos' onClick={resetTodos}>
                <RiRefreshLine/>
            </Button>
            <Button
                title='Clear Competed Todos'
                onClick={deleteCompetedTodos}
                disabled={!completedTodosExist}
            >
                <RiDeleteBin2Line/>
            </Button>
        </div>
    );
}

export default TodosActions;
