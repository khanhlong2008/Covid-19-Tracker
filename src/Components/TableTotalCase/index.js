import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import NumberFormat from "react-number-format";
import React from "react";
import "../../App.css";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
  font: {
    fontFamily: "Nunito",
  },
});

export default function TableTotalCase({ countries, search }) {
  // console.log(countries);
  const classes = useStyles();
  return (
    <Table className={classes.table} stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          <TableCell>
            <h3 className={classes.font}>Country</h3>
          </TableCell>

          <TableCell align="center">
            <h3 className={classes.font}>Cases</h3>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {countries.map((row, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="center">
                <img src={row.countryInfo.flag} alt="" className="img" />
                <h4>{row.country}</h4>
              </div>
            </TableCell>
            <TableCell align="center" className={classes.font}>
              <h3>
                <NumberFormat
                  value={row.cases}
                  thousandSeparator={true}
                  displayType="text"
                />
              </h3>
              <h5>Last 24 hour:{}</h5>
            </TableCell>
          </TableRow>
        ))} */}
        {countries
          .filter((row) => {
            return row.country.toLocaleLowerCase().includes(search);
          })
          .map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <div className="center">
                    <img src={row.countryInfo.flag} alt="" className="img" />
                    <h4>{row.country}</h4>
                  </div>
                </TableCell>
                <TableCell align="center" className={classes.font}>
                  <h5>
                    <NumberFormat
                      value={row.cases}
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
  );
}
// if(search){
//
//   })
// }
