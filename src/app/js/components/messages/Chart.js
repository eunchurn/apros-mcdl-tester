import React, { useState, useEffect } from "react";
import { TimeSeries } from "pondjs";
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  Resizable
} from "react-timeseries-charts";

const Chart = props => {
  const { title, data, time } = props;
  const points = data.map((item, index) => [index, item]);
  const series = new TimeSeries({
    name: title,
    columns: ["time", "value"],
    points
  });
  const [state, setState] = useState({
    timerange: series.range()
  });

  const handleTimeRangeChange = timerange => {
    setState({ timerange });
  };

  return (
    <Resizable>
      <ChartContainer
        timeRange={series.timerange()}
        titleStyle={{ fill: "#555", fontWeight: 500 }}
        padding={10}
        paddingTop={0}
        paddingBottom={0}
        enableDragZoom
        onTimeRangeChanged={handleTimeRangeChange}
      >
        <ChartRow height="150">
          <YAxis
            id="axis1"
            label={title}
            min={series.min()}
            max={series.max()}
            width="60"
            type="linear"
            format="g"
          />
          <Charts>
            <LineChart axis="axis1" series={series} column={["Acc"]} />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default Chart;
