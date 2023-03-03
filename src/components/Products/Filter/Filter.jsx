import React, { useContext } from "react";
import { FilterDispath } from "../../Context/ContextFilter";
import "./Filter.css";

export default function Filter() {
  const { dispath } = useContext(FilterDispath);
  return (
    <div className="filter_container">
      <div className="filter_btnBox" dir="ltr">
        <button onClick={() => dispath({ type: "ALL" })} className="filter_btn">
          All
        </button>
        <button
          onClick={() => dispath({ type: "Whisky" })}
          className="filter_btn"
        >
          Whisky
        </button>
        <button
          onClick={() => dispath({ type: "Vang" })}
          className="filter_btn"
        >
          Vang
        </button>
        <button
          onClick={() => dispath({ type: "Sake" })}
          className="filter_btn"
        >
          Sake
        </button>
        <button
          onClick={() => dispath({ type: "Champagne" })}
          className="filter_btn"
        >
          Champagne
        </button>
        <button
          onClick={() => dispath({ type: "IQOS" })}
          className="filter_btn"
        >
          IQOS
        </button>
        <button
          onClick={() => dispath({ type: "ESS" })}
          className="filter_btn"
        >
          ESS
        </button>
        <button
          onClick={() => dispath({ type: "FUCOIDAN" })}
          className="filter_btn"
        >
          FUCOIDAN
        </button>
      </div>
    </div>
  );
}
