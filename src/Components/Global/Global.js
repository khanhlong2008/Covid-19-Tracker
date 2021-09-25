import React, { Component } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./Global.css";
import WorldStats from "./../WorldStats/worldstats";

class Upper extends Component {
  state = {
    result: {
      CoronavirusCases: 0,
      CasesDeaths: 0,
      CasesRecovered: 0,
      ActiveCases: 0,
    },
  };

  async componentDidMount() {
    var globalData = await axios.get("https://disease.sh/v3/covid-19/all");

    let corona = globalData.data;
    // console.log(corona);
    this.setState({
      result: {
        CoronavirusCases: corona.cases,
        CasesDeaths: corona.deaths,
        CasesRecovered: corona.recovered,
        ActiveCases:
          // corona.TotalConfirmed - (corona.TotalRecovered + corona.TotalDeaths),
          corona.active,
      },
    });
  }

  render() {
    var Stats = Object.keys(this.state.result).map((key, index) => {
      return (
        <WorldStats
          key={index}
          about={key}
          total={
            <NumberFormat
              value={this.state.result[key]}
              thousandSeparator={true}
              displayType="text"
            />
          }
        />
      );
    });

    return (
      <div className="Global">
        <h1 className="heading">Covid-19 Tracker</h1>
        <div className="world-stats">{Stats}</div>
      </div>
    );
  }
}

export default Upper;
