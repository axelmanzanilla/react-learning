import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { Div } from "../styled/Expenses";

function Expenses(props) {
    return (
        <div>
            <ExpenseFilter />
            <Div>
                {props.data.map((e) => (
                    <ExpenseItem
                        key={e.id}
                        date={e.date}
                        title={e.title}
                        price={e.amount}
                    ></ExpenseItem>
                ))}
            </Div>
        </div>
    );
}

export default Expenses;
