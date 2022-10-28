import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { Div } from "../styled/Expenses";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2022");

    const expenseFilterHandler = (year) => setSelectedYear(year);

    return (
        <Div>
            <ExpenseFilter
                selected={selectedYear}
                onChangeFilterYear={expenseFilterHandler}
            />
            <ExpensesChart
                expenses={props.data.filter(
                    (ex) => ex.date.getFullYear() == selectedYear
                )}
            />
            {props.data
                .filter((ex) => ex.date.getFullYear() == selectedYear)
                .map((e) => (
                    <ExpenseItem
                        key={e.id}
                        date={e.date}
                        title={e.title}
                        price={e.amount}
                    ></ExpenseItem>
                ))}
        </Div>
    );
}

export default Expenses;
