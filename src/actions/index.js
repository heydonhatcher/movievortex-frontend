import { createAction } from "@reduxjs/toolkit";
import { API_URL } from "../constants";

export const newMovieSelected = createAction("newMovieSelected");
export const movieResultsReceived = createAction("movieResultsReceived");
export const movieQueryStarted = createAction("movieQueryStarted");
export const movieQueryFinished = createAction("movieQueryFinished");
export const movieResultClicked = movie => dispatch => {
  dispatch(newMovieSelected(movie));
  dispatch(movieQueryStarted());
  let url = API_URL + "/movies/match";
  console.log(url);
  let allPeople = new Set();
  movie.writers.forEach(writer => {
    allPeople.add(writer.nconst);
  });
  movie.directors.forEach(director => {
    allPeople.add(director.nconst);
  });
  movie.actors.forEach(actor => {
    allPeople.add(actor.nconst);
  });
  allPeople = Array.from(allPeople);
  let body = JSON.stringify({
    people: allPeople,
    exclude: movie.tconst
  });
  console.log(body);
  fetch(url, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors"
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch(movieQueryFinished());
      dispatch(movieResultsReceived(data));
    });
};
