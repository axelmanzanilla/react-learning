import React from "react";
import { Filter, FilterControl } from "../styled/ExpenseFilter";

const ExpensesFilter = (props) => {
    const selectHandler = (event) =>
        props.onChangeFilterYear(event.target.value);

    return (
        <Filter>
            <FilterControl>
                <label>Filter by year</label>
                <select value={props.selected} onChange={selectHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </FilterControl>
        </Filter>
    );
};

export default ExpensesFilter;
