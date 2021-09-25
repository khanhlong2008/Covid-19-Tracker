import { TextField, Box, FormControl,} from "@material-ui/core";
import React, { Component } from "react";

export default class SearchVaccine extends Component {
  state = {
    query: "",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.props.OnSearchVaccine(this.state.query);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.query !== this.state.query) {
      return true;
    }
    return false;
  }
  onQueryChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };
  render() {
    return (
    

      <FormControl>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "70ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            value={this.state.value}
            onChange={this.onQueryChange}
            placeholder="Search Country ..."
          />
        </Box>
      </FormControl>
    );
  }
}
