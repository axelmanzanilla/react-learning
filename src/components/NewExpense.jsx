import React from "react";
import ExpenseForm from "./ExpenseForm";
import { Div } from "../styled/NewExpense";

function NewExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    }

    return (
        <Div>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </Div>
    );
}

export default NewExpense;
