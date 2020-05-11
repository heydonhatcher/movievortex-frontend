import React from "react";
import PropTypes from "prop-types";
import { personPropType } from "../constants/propTypes";

const PersonList = ({ people, onClick }) => {
  const personList = people.map((person) => (
    <li key={person.nconst}>{person.name}</li>
  ));
  return <ul>{personList}</ul>;
};

PersonList.propTypes = {
  people: PropTypes.arrayOf(personPropType).isRequired,
};

export default PersonList;
