import React from "react";
import { ItemDate, Month, Year, Day } from "../styled/ExpenseItem";

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();

    return (
        <ItemDate>
            <Month>{month}</Month>
            <Day>{day}</Day>
            <Year>{year}</Year>
        </ItemDate>
    );
}

export default ExpenseDate;
