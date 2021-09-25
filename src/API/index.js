import axios from "axios";
// import moment from "moment";

export const getCountries = () =>
  axios.get("https://disease.sh/v3/covid-19/countries");

export const getMapDataByCountryId = (countryId) =>
  import(
    `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
  );
export const getDataTableVaccine = () =>
  `https://disease.sh/v3/covid-19/vaccine/coverage/countries`;
// https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=60
// https://disease.sh/v3/covid-19/vaccine/coverage/countries/${}?lastdays=60
// https://disease.sh/v3/covid-19/vaccine/coverage
export const getDataAllCountry = () =>
  axios.get("https://disease.sh/v3/covid-19/all");
export const getDataCountries = () =>
  axios.get("https://disease.sh/v3/covid-19/countries");
