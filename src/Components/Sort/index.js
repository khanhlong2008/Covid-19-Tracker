import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
  font: {
    fontFamily: "Nunito",
  },
  size: {
    height: 50,
    width: 130,
    fontSize: 20,
    fontFamily: "Nunito",
    marginBottom: 30,
    marginLeft: 60,
  },
});

export default function Sort({ onSortChange, value }) {
  const classes = useStyles();

  return (
    <Box sx={{ minWidth: 120 }} className={classes.size}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{ fontSize: 20 }}>
          Sort
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Sort"
          onChange={onSortChange}
          className={classes.size}
        >
          <MenuItem value={10} className="font-family-option">
            Case Up
          </MenuItem>
          <MenuItem value={20} className="font-family-option">
            Case down
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
