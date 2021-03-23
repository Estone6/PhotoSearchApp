import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { searchPhotos } from "./actions";
import "../../App.css";

function Home(props) {
  const [query, setQuery] = useState("");
  console.log(props.data);
  return (
    <div className="container pt-5">
      <div className="d-flex justify-content-center mb-5">
        <div className="input-group w-75">
          <input
            type="text"
            className="form-control"
            placeholder={`Try "dog" or "apple"`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div
            className="input-group-btn"
            onClick={(e) => {
              e.preventDefault();
              props.searchPhotos(query);
            }}
          >
            <Button variant="outline-dark">Search</Button>
          </div>
        </div>
      </div>
      <div className="img-grid">
        {props.data.map((photos) => (
          <div className="img-wrap">
            <img src={photos.urls.regular} alt="image_" />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  searchPhotos: (value) => dispatch(searchPhotos(value)),
});

const mapStateToProps = (state) => {
  const pageReduxState = state.homeReducer;
  return { data: pageReduxState.data };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
