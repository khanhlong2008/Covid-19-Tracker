/* eslint-disable react/react-in-jsx-scope */
// import { Grid } from "@material-ui/core";
import React from "react";
// import { getMapDataByCountryId } from "../../API";
// import HighMaps from "../Charts/HighMaps";
import LineChart from "../Charts/LineChart";
import "../../App.css";
import Loading from "../Loading";
// import Map from "../Charts/Map";
// import { Map as LeafletMap, TileLayer } from "react-leaflet";
// import { showDataOnMap } from ".././Util/";

export default function Summary({ casesType, country, countryInfo, loading }) {
  // const lowerCase = country.toLowerCase();

  // const [mapData, setMapData] = useState({});
  // useEffect(() => {
  //   //vn , us
  //   getMapDataByCountryId(lowerCase).then((res) => setMapData(res));
  // }, [lowerCase]);
  return (
    <>
      <div className=" ">
        {/* <Grid container spacing={3}> */}
        {/* <Grid item sm={6} xs={12}> */}
        <LineChart
          casesType={casesType}
          country={country}
          countryInfo={countryInfo}
        />
        {/* </Grid> */}
        {/* <Grid item sm={1} xs={12}> */}
        <Loading loading={loading} />
        {/* </Grid> */}
        {/* <Grid item sm={5} xs={12} style={{ marginTop: 25 }}> */}

        {/* </Grid> */}
        {/* </Grid> */}
      </div>
    </>
  );
}
