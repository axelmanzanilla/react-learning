import React from "react";
import ChartBar from "./ChartBar";
import { Chart as ChartStyle } from "../../styled/Chart/Chart";

const Chart = ({ dataPoints }) => {
    const dataPointsValue = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);

    return (
        <ChartStyle>
            {dataPoints.map((point) => (
                <ChartBar
                    key={point.label}
                    value={point.value}
                    maxValue={totalMaximum}
                    label={point.label}
                />
            ))}
        </ChartStyle>
    );
};

export default Chart;
