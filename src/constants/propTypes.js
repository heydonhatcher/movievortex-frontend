import PropTypes from "prop-types";

export const personPropType = PropTypes.shape({
  nconst: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

export const moviePropType = PropTypes.shape({
  tconst: PropTypes.string.isRequired,
  titles: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  directors: PropTypes.arrayOf(personPropType).isRequired,
  writers: PropTypes.arrayOf(personPropType).isRequired,
  actors: PropTypes.arrayOf(personPropType).isRequired,
  poster: PropTypes.string.isRequired
});
