import React from "react";
import isloading from "../../images/spinner.gif";

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <div>
        <img
          style={{
            margin: "0 auto",
            display: "block",
            height: 50,
            marginTop: 200,
            marginBottom: 200,
          }}
          src={isloading}
          alt="Loader ⚆"
        />
      </div>
    );
  }
  return null;
};

export default Loading;
