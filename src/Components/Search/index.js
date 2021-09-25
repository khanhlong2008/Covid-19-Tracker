import { TextField, Box, FormControl } from "@material-ui/core";

// export default function Search({ OnSearch }) {
//   // const [search, setSearch] = React.useState("");

//   // useEffect(() => {
//   //   OnSearch(search);
//   // });
//   // const onQueryChange = (e) => {
//   //   setSearch(e.target.value);
//   // };
//   return (
//     <FormControl className={classes.styles}>
//       <Box
//         component="form"
//         sx={{
//           "& > :not(style)": { m: 1, width: "60ch" },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="outlined-basic"
//           label="Search Country ..."
//           variant="outlined"
//           // type="text"
//           // value={search}
//           // onChange={onQueryChange}
//         />
//       </Box>
//     </FormControl>
//   );
// }
import React, { Component } from "react";

export default class Search extends Component {
  state = {
    query: "",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.props.OnSearch(this.state.query);
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
            "& > :not(style)": { m: 2, width: "160ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            // label="Search Country ..."
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
