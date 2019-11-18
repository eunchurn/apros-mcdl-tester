import React, { useState, useEffect } from "react";
import { TimeSeries } from "pondjs";
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  Baseline,
  Resizable
} from "react-timeseries-charts";

const baselineStyleLite = {
    line: {
        stroke: "steelblue",
        strokeWidth: 1,
        opacity: 0.5
    },
    label: {
        fill: "red",
        stroe: "red"
    }
};

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
            <Baseline axis="axis1" style={baselineStyleLite} value={series.max()} label={`Max: ${series.max()}`} position="right" />
            <Baseline axis="axis1" style={baselineStyleLite} value={series.min()} label={`Max: ${series.min()}`} position="right" />
            <Baseline axis="axis1" style={baselineStyleLite} value={series.avg()} label={`Mean: ${series.avg()}`} position="right" />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default Chart;
