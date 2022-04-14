import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
import {
  getXaxisBarGraphData,
  getYaxisBarGraphData,
  getXaxisLineGraphData,
  getYaxisLineGraphData,
} from "./data";

function App() {
  const stackedColumGraph = {
    credits: {
      enabled: false, //disabled the credits of highcharts
    },
    chart: {
      type: "column",
    },
    colors: ["#0F72EE", "#579cf3", "#031730"],
    title: {
      text: "Active Users",
      align: "left",
      x: 70,
    },
    subtitle: {
      text: "Total number of active users across different bots in the period",
      align: "left",
      x: 70,
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    },
    yAxis: {
      min: 0,
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
    legend: {
      align: "right",
      x: 0,
      verticalAlign: "top",
      y: 0,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "white",
      borderColor: "#CCC",
      borderWidth: 1,
      shadow: false,
    },
    series: [
      {
        name: "HR",
        data: [5, 3, 4, 7, 2, 3],
      },
      {
        name: "Engineering",
        data: [2, 2, 3, 2, 1, 2],
      },
      {
        name: "IT",
        data: [3, 4, 4, 2, 5, 4],
      },
    ],
  };

  const lineGraphOptions = {
    credits: {
      enabled: false, //disabled the credits of highcharts
    },
    chart: {
      type: "areaspline",
    },
    title: {
      text: "Sessions",
      align: "left",
      x: 70,
    },
    subtitle: {
      text: "Running total of all sessions in the period",
      align: "left",
      x: 70,
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.2,
      },
      line: {
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
    series: [
      {
        showInLegend: false,
        data: getYaxisLineGraphData(),
        allowPointSelect: true,
        marker: {
          lineWidth: 2,
          lineColor: "#0F72EE",
          fillColor: "white",
          fillColor: "#f5f9fe",
        },
      },
    ],
  };

  const featuresUsedOptions = {
    credits: {
      enabled: false, //disabled the credits of highcharts
    },
    chart: {
      type: "bar",
    },
    title: {
      text: "features Used",
      align: "left",
      x: 70,
    },
    subtitle: {
      text: "Feature sessions in the period - Which feature was used the most",
      align: "left",
      x: 70,
    },
    xAxis: {
      title: {
        text: "Categories",
      },
      categories: [
        "Raise Ticket",
        "Employee Referral",
        "IJP",
        "Flexible Benefits",
      ],
    },
    series: [
      {
        showInLegend: false,
        data: [
          { y: 54, color: "#4995D0" },
          { y: 89, color: "#4CA68A" },
          { y: 40, color: "#F5CDB0" },
          { y: 55, color: "#FF9292" },
        ],
      },
    ],
  };
  return (
    <Wrapper>
      <div className="active-user-container graph">
        <HighchartsReact highcharts={Highcharts} options={stackedColumGraph} />
      </div>
      <div className="session-container graph">
        <HighchartsReact highcharts={Highcharts} options={lineGraphOptions} />
      </div>
      <div className="features-used-container graph">
        <HighchartsReact
          highcharts={Highcharts}
          options={featuresUsedOptions}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  .graph {
    flex: 0 0 calc(50% - 1rem);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    > div {
      border-radius: inherit;
    }
  }
`;

export default App;
