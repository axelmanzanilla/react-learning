import React from "react";
import {
    ChartBar as CharBarStyled,
    Inner,
    Fill,
    Label,
} from "../../styled/Chart/ChartBar";

const ChartBar = (props) => {
    let barFillHeight = "0%";

    if (props.maxValue > 0)
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";

    // console.log(Math.round((props.value / props.maxValue) * 100));

    return (
        <CharBarStyled>
            <Inner>
                <Fill height={barFillHeight}></Fill>
            </Inner>
            <Label>{props.label}</Label>
        </CharBarStyled>
    );
};

export default ChartBar;
