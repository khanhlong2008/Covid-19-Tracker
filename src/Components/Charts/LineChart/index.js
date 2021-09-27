/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { Button, ButtonGroup } from "@material-ui/core";
import SearchSelected from "../../SearchSelected";

const options = {
  plugins: {
    legend: {
      display: false,
    },

    elements: {
      point: {
        radius: 0,
      },
    },

    maintainAspectRatio: true,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 1,
      to: 0,
      loop: true,
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "LL",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};
export default function LineChart({
  casesType,
  country,
  countryInfo,
  countries,
  value,
  onCountryChange,
}) {
  const [data, setData] = useState({});
  const [color, setColor] = useState("cases");
  const [reportType, setReportType] = useState("all");
  const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    if (data.cases) {
      for (let date in data.cases) {
        if (lastDataPoint) {
          let newDataPoint = {
            x: date,
            y: data[casesType][date] - lastDataPoint,
          };
          chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
      }
      return chartData;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      country === "Worldwide"
        ? await fetch(
            "https://disease.sh/v3/covid-19/historical/all?lastdays=60"
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              let chartData = buildChartData(data || {}, casesType);
              let customData = [];
              switch (reportType) {
                case "all":
                  customData = chartData;
                  break;
                case "Yesterday":
                  customData = chartData.slice(
                    Math.max(chartData.length - 2, 1)
                  );

                  break;
                case "30":
                  customData = chartData.slice(
                    Math.max(chartData.length - 30, 1)
                  );
                  break;
                case "7":
                  customData = chartData.slice(
                    Math.max(chartData.length - 7, 1)
                  );
                  break;

                default:
                  customData = chartData;
                  break;
              }
              setData(customData);
            })
        : await fetch(
            `https://disease.sh/v3/covid-19/historical/${country}?lastdays=60`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              // console.log(data)
              let chartData = buildChartData(data.timeline || {}, casesType);
              let customData = [];
              switch (reportType) {
                case "all":
                  customData = chartData;
                  break;
                case "Yesterday":
                  customData = chartData.slice(
                    Math.max(chartData.length - 2, 1)
                  );

                  break;
                case "30":
                  customData = chartData.slice(
                    Math.max(chartData.length - 30, 1)
                  );
                  break;
                case "7":
                  customData = chartData.slice(
                    Math.max(chartData.length - 7, 1)
                  );
                  break;

                default:
                  customData = chartData;
                  break;
              }
              setData(customData);
            });
    };
    fetchData();
  }, [casesType, country, reportType]);

  useEffect(() => {
    if (casesType === "cases") {
      setColor("#DF0029");
    } else if (casesType === "recovered") {
      setColor("#28a745");
    } else {
      setColor("#000000");
    }
  }, [casesType]);
  return (
    <div>
      <h2 style={{ marginBottom: 20, textAlign: "center" }}>
        {country === "Worldwide"
          ? `Worldwide New  ${casesType}`
          : `${countryInfo.country} New ${casesType}`}
      </h2>
      <div className="search-sort">
        <SearchSelected
          countries={countries}
          onCountryChange={onCountryChange}
          value={value}
        />
        <ButtonGroup
          variant="contained"
          aria-label=" large outlined button group"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            color={reportType === "all" ? "secondary" : ""}
            onClick={() => setReportType("all")}
          >
            <h5>All</h5>
          </Button>
          <Button
            color={reportType === "Yesterday" ? "secondary" : ""}
            onClick={() => setReportType("Yesterday")}
          >
            <h5>Yesterday</h5>
          </Button>
          <Button
            color={reportType === "7" ? "secondary" : ""}
            onClick={() => setReportType("7")}
          >
            <h5>7 days</h5>
          </Button>
          <Button
            color={reportType === "30" ? "secondary" : ""}
            onClick={() => setReportType("30")}
          >
            <h5>30 days</h5>
          </Button>
        </ButtonGroup>
      </div>

      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1,

                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}
