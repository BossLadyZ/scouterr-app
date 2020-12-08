import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/Controls";
import * as concerns from "../services/recordServices";

const initialFValues = {
  id: 0,
  fullName: "",
  dateVisit: new Date(),
  location: "",
  observationConcern: "",
  description: "",
};

export default function RecordForm(props) {
  const { values, setValues, handleInputChange } = useForm(initialFValues);
  const handleFormSubmit = (e) => {
    console.log("submitted?");
    e.preventDefault();
    props.addOrEdit(values);
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            variant="outlined"
            label="Farm Visited"
            name="location"
            value={values.location}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.DatePicker
            name="dateVisit"
            label="Date of Visit"
            value={values.dateVisit}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="observationConcern"
            label="Scouting Concern"
            value={values.observationConcern}
            onChange={handleInputChange}
            options={concerns.observationCollection}
          />
        </Grid>
        <Grid item sm={12}>
          <Controls.Input
            name="description"
            label="Scouting Observations"
            multiline="true"
            rows={5}
            rowsMax={20}
            value={values.description}
            onChange={handleInputChange}
          />
        </Grid>
        <div>
          <Controls.Button
            type="submit"
            text="Save"
            onClick={handleFormSubmit}
          />
        </div>
      </Grid>
    </Form>
  );
}
