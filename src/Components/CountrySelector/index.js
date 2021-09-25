/* eslint-disable react/react-in-jsx-scope */
import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: `${theme.spacing(3)}px 0`,
    minWidth: 120,
    fontFamily: "Nunito",
    marginBottom: 20,
  },
  size: {
    height: 40,
    width: 400,
    fontSize: 20,
    fontFamily: "Nunito",
  },
}));
export default function CountrySelector({ value, onCountryChange, countries }) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <div className="background--Selected ">
        <InputLabel
          htmlFor="country-selector"
          className="InputLabel"
          style={{ fontSize: 20 }}
        >
          Country
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={onCountryChange}
          inputProps={{
            name: "country",
            id: "country-selector",
          }}
          className={classes.size}
        >
          <option className="font-family-option" value="Worldwide">
            Worldwide
          </option>
          {countries.map((country, index) => (
            <option
              key={index}
              value={country.value}
              className="font-family-option"
            >
              {country.name}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText style={{ fontSize: 15 }}>
          Selected Country
        </FormHelperText>
      </div>
    </FormControl>
  );
}
CountrySelector.defaultProps = {
  countries: [],
};
