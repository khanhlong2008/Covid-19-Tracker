/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
// import moment from "moment";
import "./App.css";
// import Loading from "./Components/Loading";
import Summary from "./Components/Summary";
import React, { useEffect } from "react";
import {  Grid } from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableTotalCase from "./Components/TableTotalCase";
import HighlightCart from "./Components/Highlight/HighlightCart";
// import Search from "./Components/Search";
import Nav from "./Components/Navbar";
import VaccineCountry from "./Components/TableVaccine/VaccineCountry";
import "leaflet/dist/leaflet.css";
import { Map, Popup, TileLayer, Circle } from "react-leaflet";
import numeral from "numeral";
import { getDataAllCountry } from "./API/index";
import LineChartVaccine from "./Components/Charts/LineChartVaccine";
import Button_Group from "./Components/ButtonGruop";
const casesTypeColors = {
  cases: {
    hex: "#df1f1f",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#000000",
    rgb: "rgb(2, 0, 0",
    half_op: "rgba(15, 15, 15, 0.5)",
    multiplier: 2000,
  },
};
export default function App() {
  const [countries, setCoutries] = React.useState([]);
  const [countryInfo, setCountryInfo] = React.useState({});
  const [country, setInputCountry] = React.useState("Worldwide");
  const [tableData, setTableData] = React.useState([]);
  const [casesType, setCasesType] = React.useState("cases");
  // const [loading, setLoading] = React.useState(false);
  // const [loadingVaccine, setLoadingVaccine] = React.useState(false);
  // const [search, SetSearch] = React.useState("");
  const [searchVaCCine, SetSearchVaccine] = React.useState("");
  const [mapCountries, setMapCountries] = React.useState([]);
  const [mapZoom, setMapZoom] = React.useState(3);
  const [vaccineCountry, setInputVaccineCountry] = React.useState("Worldwide");
  const [mapCenter, setMapCenter] = React.useState({
    lat: 34.80746,
    lng: -40.4796,
  });
  const [click, setClick] = React.useState();
  const clickButtonGroup = (action) => {
    setClick(action);
  };
  useEffect(() => {
    getDataAllCountry().then((data) => setCountryInfo(data.data));
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            flag: country.countryInfo.flag,
          }));
          setCoutries(countries);
          setTableData(data);
          setMapCountries(data);
        });
    };

    getCountriesData();
  }, []);
  const onCountryChange = async (e) => {
    // setLoading(true);
    const countryCode = e;
    console.log(e);
    const url =
      countryCode === "Worldwide"
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        countryCode === "Worldwide"
          ? setMapCenter([21, 105.8])
          : setMapCenter([data.countryInfo.lat || {}, data.countryInfo.long]);
        setMapZoom(4);
        // setTimeout(() => {
        //   setLoading(false);
        // }, 500);
      });
  };
  const onVaccineChange = async (e) => {
    // setLoadingVaccine(true);
    const countryCode = e;
    setInputVaccineCountry(countryCode);
    // setTimeout(() => {
    //   setLoadingVaccine(false);
    // }, 1000);
  };

  // const OnSearch = (query) => {
  //   const char = query.toLowerCase();
  //   SetSearch(char);
  // };
  const OnSearchVaccine = (query) => {
    const char = query.toLowerCase();
    SetSearchVaccine(char);
  };
  return (
    <>
      <Nav />
      <Map
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: 430, width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {mapCountries.map((country, index) => (
          <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            fillOpacity={0.4}
            radius={
              Math.sqrt(country[casesType]) *
              casesTypeColors[casesType].multiplier
            }
            key={index}
          >
            <Popup>
              <div className="info-container">
                <div
                  className="info-flag"
                  style={{
                    backgroundImage: `url(${country.countryInfo.flag})`,
                  }}
                ></div>
                <div className="info-name">{country.country}</div>
                <div className="info-confirmed">
                  Cases: {numeral(country.cases).format("0,0")}
                </div>
                <div className="info-recovered">
                  Recovered: {numeral(country.recovered).format("0,0")}
                </div>
                <div className="info-deaths">
                  Deaths: {numeral(country.deaths).format("0,0")}
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
      </Map>
      <div className="background App">
        <Button_Group clickButtonGroup={clickButtonGroup} style={{marginBottom:20}}/>
        {click === "active-Map" ? (
          <>
            {/* <h3
              style={{ marginBottom: 20, textAlign: "center", marginTop: 20 }}
            >
              {moment().format("LLLL")}
            </h3> */}
            <Grid
              container
              spacing={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HighlightCart
                onClick={(e) => {
                  setCasesType("cases");
                }}
                title="Coronavirus Cases: "
                total={countryInfo.cases}
                type="cases"
                today={countryInfo.todayCases}
              />
              <HighlightCart
                onClick={(e) => {
                  setCasesType("recovered");
                }}
                title="Cases Recovered: "
                total={countryInfo.recovered}
                type="recovered"
                today={countryInfo.todayRecovered}
              />
              <HighlightCart
                onClick={(e) => {
                  setCasesType("deaths");
                }}
                title="Cases Deaths: "
                total={countryInfo.deaths}
                type="deaths"
                today={countryInfo.todayDeaths}
              />
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Summary
                  casesType={casesType}
                  country={country}
                  countryInfo={countryInfo}
                  countries={countries}
                  onCountryChange={onCountryChange}
                  value={country}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <LineChartVaccine
                  countries={countries}
                  onVaccineChange={onVaccineChange}
                  vaccineCountry={vaccineCountry}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <h2 style={{ textAlign: "center", marginBottom: 20 }}>
              {" "}
              Live Table
            </h2>
            {/* <Grid container spacing={3}> */}
            <VaccineCountry
              OnSearchVaccine={OnSearchVaccine}
              searchVaCCine={searchVaCCine}
              value={vaccineCountry}
              tableData={tableData}
            />
            {/* </Grid> */}
          </>
        )}
      </div>
      <div className="background App">
        <div className="news">
          
        </div>
      </div>
    </>
  );
}
