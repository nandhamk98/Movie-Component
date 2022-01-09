import { useState } from "react";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import IconButton from "@mui/material/IconButton";
import { Counter } from "./counter";

export function MovieComponent(props) {
  const ratingStyle = { color: props.rating >= 8 ? "green" : "red" };

  const [show, setShow] = useState(true);
  return (
    <div className="movieComp">
      <img className="moviePoster" src={props.poster} alt={props.name}></img>
      <div className="movieName">
        <h6>
          {props.name}
          <IconButton
            aria-label="toggle description"
            color="primary"
            onClick={() => {
              console.log(show);
              setShow(!show);
            }}
          >
            {show ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
          </IconButton>
        </h6>
        <h6 style={ratingStyle}>⭐️{props.rating}</h6>
      </div>

      {/* <p>Rating:{props.rating}⭐️</p> */}
      {show ? <p className="movieSummary">{props.description}</p> : ""}
      <Counter />
    </div>
  );
}
