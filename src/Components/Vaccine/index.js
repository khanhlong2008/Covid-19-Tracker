import React from "react";
import "../../App.css";
import VaccineCountry from "../TableVaccine/VaccineCountry";
import LineChartVaccine from "./../Charts/LineChartVaccine/index";
import { Grid } from "@material-ui/core";
import moment from "moment";

export default function Vaccine({
  vaccineCountry,
  casesType,
  countries,
  value,
  onVaccineChange,
  OnSearchVaccine,
  searchVaCCine,
  countryInfo
}) {
  return (
    <div className=" background App ">
      <h1 style={{ marginBottom: 20, textAlign: "center" }}>VACCINE</h1>
      <h3 style={{ marginBottom: 20, textAlign: "center" }}>{moment().format("LLLL")}</h3>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12} style={{marginTop:20}}>
          <VaccineCountry
            OnSearchVaccine={OnSearchVaccine}
            searchVaCCine={searchVaCCine}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <LineChartVaccine
            casesType={casesType}
            vaccineCountry={vaccineCountry}
            countries={countries}
            value={value}
            onVaccineChange={onVaccineChange}
            countryInfo={countryInfo}
          />
        </Grid>
      </Grid>
    </div>
  );
}
