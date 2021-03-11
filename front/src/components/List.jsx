import React from "react";
import { connect } from "react-redux";
import { getWordsList } from "../redux/selectors";

const List = ({ words }) => {
  return (
    <div className="d-flex flex-fill justify-content-center">
      <div className="container bg-white m-2 p-2 min-vh-75">
        <div className="col">
          <div className="row mt-2 ml-2">
            <h2>Results: </h2>
          </div>
          <div className="row mt-2 w-100 d-flex justify-content-center">
            <ul className="list-group w-75">
              {words && words.length > 0
                ? words.map((word, index) => (
                    <li key={index} className="list-group-item">
                      <i
                        className={`fa ${
                          word.palindrome
                            ? "fa-check text-success"
                            : "fa-times text-danger"
                        }`}
                      />
                      {` ${word.text}`}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const words = getWordsList(state);
  return { words };
};

export default connect(mapStateToProps)(List);
