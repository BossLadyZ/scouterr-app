import { Table } from "@material-ui/core";
import React from "react";

export default function useTable(recordObjects, headCells) {
  const TblContainer = (props) => <Table>{props.children}</Table>;
  return {
    TblContainer,
  };
}
