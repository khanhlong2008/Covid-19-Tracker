import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import NumberFormat from "react-number-format";
import SearchVaccine from "../Search/SearchVaccine";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
  font: {
    fontFamily: "Nunito",
  },
});
const buildData = (data, tableData) => {
  let names = tableData.map((item) => {
    return item.country;
  });
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
      info: tableData[names.indexOf(item.country)]?.countryInfo.flag,
      population: tableData[names.indexOf(item.country)]?.population,
    };
    delete d.timeline;
    return d;
  });
  return new_data;
};
export default function VaccineTableCountry({
  OnSearchVaccine,
  searchVaCCine,
  value,
  tableData,
}) {
  const [dataTable, setDataTable] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries")
      .then((response) => response.json())
      .then((data) => {
        let lastData = buildData(data, tableData);
        setDataTable(lastData);
      });
  }, [tableData]);
  return (
    <>
      <div className="search-sort">
        <SearchVaccine OnSearchVaccine={OnSearchVaccine} value={value} />
      </div>

      <TableContainer
        component={Paper}
        style={{ maxBlockSize: 420, margingTop: 27 }}
      >
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <h4 className={classes.font}>Country</h4>
              </TableCell>
              <TableCell>
                {" "}
                <h4 align="center" className={classes.font}>
                  Population
                </h4>
              </TableCell>
              <TableCell align="center">
                {" "}
                <h4 className={classes.font}>Vaccine</h4>
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
                      <div className="center">
                        <img src={data.info} alt="" className="img" />

                        <h5>{data.country}</h5>
                      </div>
                    </TableCell>
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      className={classes.font}
                    >
                      <h5>
                        <NumberFormat
                          value={data.population}
                          thousandSeparator={true}
                          displayType="text"
                        />
                      </h5>
                    </TableCell>

                    <TableCell
                      align="center"
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
