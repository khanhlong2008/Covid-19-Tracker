/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import moment from "moment";
import "./App.css";
import Loading from "./Components/Loading";
import Summary from "./Components/Summary";
import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import TableTotalCase from "./Components/TableTotalCase";
import Globals from "./Components/Global/Global";
import HighlightCart from "./Components/Highlight/HighlightCart";
import Search from "./Components/Search";
import Nav from "./Components/Navbar";
import News from "./Components/News";
import Sort from "./Components/Sort";
import Vaccine from "./Components/Vaccine";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Map, Popup, TileLayer, Circle } from "react-leaflet";
import numeral from "numeral";
// import img from "./images/tableCountry.jpg";
import { getDataAllCountry } from "./API/index";
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
  const [loading, setLoading] = React.useState(false);
  const [sort, setSort] = React.useState(10);
  const [search, SetSearch] = React.useState("");
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
  const onSortChange = (e) => {
    const typeTarget = e;
    setSort(typeTarget);
    switch (sort) {
      case 10:
        setTableData(
          tableData.sort((a, b) => parseFloat(a.cases) - parseFloat(b.cases))
        );
        break;
      case 20:
        setTableData(
          tableData.sort((a, b) => parseFloat(b.cases) - parseFloat(a.cases))
        );
        break;
      default:
        break;
    }
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
          const sortData = data.sort(
            (a, b) => parseFloat(b.cases) - parseFloat(a.cases)
          );
          setTableData(sortData);
          setMapCountries(data);
        });
    };

    getCountriesData();
  }, []);
  const onCountryChange = async (e) => {
    setLoading(true);
    const countryCode = e;
    const url =
      countryCode === "Worldwide"
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  const onVaccineChange = async (e) => {
    const countryCode = e;
    setInputVaccineCountry(countryCode);
  };

  const OnSearch = (query) => {
    const char = query.toLowerCase();
    SetSearch(char);
  };
  const OnSearchVaccine = (query) => {
    const char = query.toLowerCase();
    SetSearchVaccine(char);
  };
  return (
    <BrowserRouter>
      <Nav />
      <Globals />
      <Switch>
        <Route path="/" exact component={App}>
          <div className=" background App">
            <h3 style={{ marginBottom: 20, textAlign: "center" }}>
              {moment().format("LLLL")}
            </h3>
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
                title="Coronavirus Cases"
                total={countryInfo.cases}
                type="cases"
              />
              <HighlightCart
                onClick={(e) => {
                  setCasesType("recovered");
                }}
                title="Cases Recovered"
                total={countryInfo.recovered}
                type="recovered"
              />
              <HighlightCart
                onClick={(e) => {
                  setCasesType("deaths");
                }}
                title="Cases Deaths"
                total={countryInfo.deaths}
                type="deaths"
              />
            </Grid>
            {loading === true ? (
              <Loading loading={loading} />
            ) : (
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12} style={{ marginTop: 20 }}>
                  <Summary
                    loading={loading}
                    casesType={casesType}
                    country={country}
                    countryInfo={countryInfo}
                    countries={countries}
                    onCountryChange={onCountryChange}
                    value={country}
                  />
                </Grid>
                <Grid item sm={6} xs={12} style={{}}>
                  <Button_Group clickButtonGroup={clickButtonGroup} />
                  {click === "active-Map" ? (
                    <Map
                      center={mapCenter}
                      zoom={mapZoom}
                      style={{ height: 430, width: "100%", marginTop: 10 }}
                      className=" background"
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      />
                      {mapCountries.map((country, index) => (
                        <Circle
                          center={[
                            country.countryInfo.lat,
                            country.countryInfo.long,
                          ]}
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
                                Recovered:{" "}
                                {numeral(country.recovered).format("0,0")}
                              </div>
                              <div className="info-deaths">
                                Deaths: {numeral(country.deaths).format("0,0")}
                              </div>
                            </div>
                          </Popup>
                        </Circle>
                      ))}
                    </Map>
                  ) : (
                    <>
                      <div className="search-sort">
                        <Search OnSearch={OnSearch} />
                        <Sort onSortChange={onSortChange} value={sort} />
                      </div>
                      <TableContainer
                        component={Paper}
                        style={{ maxBlockSize: 400, marginBottom: 15 }}
                      >
                        <TableTotalCase countries={tableData} search={search} />
                      </TableContainer>
                    </>
                  )}
                </Grid>
              </Grid>
            )}
          </div>
        </Route>
        <Route path="/vaccine" component={Vaccine}>
          <Vaccine
            countries={countries}
            value={country}
            onVaccineChange={onVaccineChange}
            vaccineCountry={vaccineCountry}
            OnSearchVaccine={OnSearchVaccine}
            searchVaCCine={searchVaCCine}
            countryInfo={countryInfo}
          />
        </Route>
        <Route path="/news" component={News}></Route>
      </Switch>
    </BrowserRouter>
  );
}
