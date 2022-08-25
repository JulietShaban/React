import React, { Component } from "react";
import Online from "./Online";
import Offline from "./Offline";

const Status = props => {
  if (props.isOnline) {
    return <Offline />;
  } else {
    return <Online />;
  }
};

export default Status;
