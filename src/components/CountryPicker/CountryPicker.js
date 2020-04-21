import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const asyncFetchCountries = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    };
    asyncFetchCountries();
  }, [setCountries]);

  const countryOptions = countries.map((country, index) => (
    <option key={index} value={country}>
      {country}
    </option>
  ));

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value='global'>Global</option>
        {countryOptions}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
