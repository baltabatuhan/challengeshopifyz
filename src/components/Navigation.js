import React from "react";


const Navigation = props => {
  return (
    <div className="navigation">
     
      <div className="next-prev">
        <button
          type="button"
          disabled={props.nasa.loading ? "disabled" : null}
          onClick={() => props.handleDateChange(props.nasa.date, "daybefore")}
        >
          &larr; Previous Day
        </button>
        <button
          type="button"
          disabled={props.nasa.loading ? "disabled" : null}
          onClick={() => props.handleDateChange(props.nasa.date, "dayafter")}
        >
          Next Day &rarr;
        </button>
      </div>
    </div>
  );
};

export default Navigation;