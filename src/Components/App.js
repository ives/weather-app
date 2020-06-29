import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataService } from "../services/apiService";

import { WeatherTable } from "./WeatherTable";
import { Errors } from "./Errors";

// Material UI
import Container from "@material-ui/core/Container";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function App({ apiData, error, fetchData }) {
  const [showIcons, toggleShowIcons] = useState(true);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = () => {
    toggleShowIcons(!showIcons);
  };

  return (
    <Container maxWidth="sm">
      {apiData && apiData.city && (
        <h1>{`${apiData.city.name}, ${apiData.city.country}`}</h1>
      )}
      {error && <Errors message={error} />}

      {apiData && apiData.list && (
        <FormControlLabel
          control={
            <Switch
              checked={showIcons}
              onChange={handleChange}
              color="default"
            />
          }
          label="Show Icons"
          labelPlacement="start"
        />
      )}
      {apiData && apiData.list && (
        <WeatherTable apiData={apiData.list} showIcons={showIcons} />
      )}
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    apiData: state.apiData,
    error: state.errorMessage,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => fetchDataService(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
