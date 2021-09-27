import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import NumberFormat from "react-number-format";
import React, { useEffect, useState } from "react";
import "../../App.css";
import SearchVaccine from "../Search/SearchVaccine";
import "../../App.css";
const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
  font: {
    fontFamily: "Nunito",
  },
});
const buildData = (data) => {
  let new_data = data.map((item) => {
    let p = [];
    let timeline = item?.timeline;
    if (!timeline) {
      return null;
    }
    for (let k in timeline) {
      p.push({
        x: k,
        y: timeline[k],
      });
    }
    p.sort((current, next) => {
      let c = Date.parse(current.x);
      let n = Date.parse(next.x);
      return n.valueOf() - c.valueOf();
    });
    let d = {
      ...item,
      p,
    };
    delete d.timeline;
    return d;
  });
  return new_data;
};

export default function VaccineCountry({ OnSearchVaccine, searchVaCCine }) {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=120"
    )
      .then((response) => response.json())
      .then((data) => {
        let lastData = buildData(data);

        setDataTable(lastData);
      });
  }, []);

  const classes = useStyles();
  return (
    <>
      <SearchVaccine OnSearchVaccine={OnSearchVaccine} />
      <TableContainer component={Paper} style={{ maxBlockSize: 350 , margingTop:30 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <h3 className={classes.font}>Country</h3>
              </TableCell>
              <TableCell align="right">
                {" "}
                <h3 className={classes.font}>Vaccine</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable
              .filter((row) => {
                return row.country.toLocaleLowerCase().includes(searchVaCCine);
              })
              .map((data, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th">
                      <h4>{data.country}</h4>
                    </TableCell>

                    <TableCell
                      align="right"
                      component="th"
                      scope="row"
                      className={classes.font}
                    >
                      <h5>
                        <NumberFormat
                          value={data.p[0].y}
                          thousandSeparator={true}
                          displayType="text"
                        />
                      </h5>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
