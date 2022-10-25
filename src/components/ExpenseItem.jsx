import React from "react";
import { Item, ItemDescription, ItemPrice } from "../styled/ExpenseItem";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    return (
        <Item>
            <ExpenseDate date={props.date} />
            <ItemDescription>
                <h2>{props.title}</h2>
                <ItemPrice>$ {props.price}</ItemPrice>
            </ItemDescription>
        </Item>
    );
}

export default ExpenseItem;
