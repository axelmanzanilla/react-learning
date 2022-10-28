import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { Div } from "../styled/NewExpense";

function NewExpense(props) {
    const [editForm, setEditForm] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    }

    const cancelHandler = () => setEditForm(false);

    const addNewHandler = () => setEditForm(true);

    return (
        <Div>
            {!editForm && <button onClick={addNewHandler}>Add new item</button>}
            {editForm && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={cancelHandler}
                />
            )}
        </Div>
    );
}

export default NewExpense;
