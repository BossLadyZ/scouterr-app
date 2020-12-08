import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import RecordForm from "./RecordForm";
import { firestore } from "../config/fire";
import useTable from "../components/useTable";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Records() {
  var [recordObjects, setRecordObjects] = useState({});

  useEffect(() => {
    firestore.child("records").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setRecordObjects({
          ...snapshot.val(),
        });
    });
  });
  const addOrEdit = (obj) => {
    firestore.child("records").push(obj, (err) => {
      if (err) console.log(err);
    });
  };

  const classes = useStyles();

  const { TblContainer } = useTable();
  return (
    <>
      <PageHeader
        title="Scouting Records"
        subTitle="Enter your farm scouting records"
      />
      <Paper className={classes.pageContent}>
        <RecordForm addOrEdit={addOrEdit} />
        <TblContainer>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Observations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(recordObjects).map((id) => {
              return (
                <TableRow>
                  <TableCell>{recordObjects[id].fullName}</TableCell>
                  <TableCell>{recordObjects[id].location}</TableCell>
                  <TableCell>{recordObjects[id].description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TblContainer>
      </Paper>
    </>
  );
}
