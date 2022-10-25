import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
    const [expenses, setExpenses] = useState([
        {
            id: "e1",
            title: "Toilet paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e3",
            title: "New Desk",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]);

    function addExpenseHandler(expense) {
        setExpenses([...expenses, expense]);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses data={expenses} />
        </div>
    );
}

export default App;
