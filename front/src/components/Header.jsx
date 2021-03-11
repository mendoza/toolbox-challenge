import React, { useState } from "react";
import { connect } from "react-redux";
import { ADD_WORD, TEST_WORD } from "../redux/actionTypes";
const Header = ({ dispatch }) => {
  const [word, setWord] = useState("");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <form
        className="d-flex flex-fill align-items-center justify-content-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: TEST_WORD, payload: { word } });
          setWord("");
        }}
      >
        <div className="w-50 mr-1">
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Insert Text"
            value={word}
            onChange={(e) => {
              const { value } = e.target;
              setWord(value);
            }}
          />
        </div>
        <button type="submit" className="ml-1 btn btn-primary">
          Send
        </button>
      </form>
    </nav>
  );
};

export default connect()(Header);
