import axios from "axios";

export function searchPhotos(value) {
  console.log(value);
  return (dispatch) => {
    return axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=${process.env.REACT_APP_SECRET_KEY}`
      )
      .then((res) => dispatch(getPhotos(res)));
  };
}

export function getPhotos(res) {
  return { type: "STORE_DATA", data: res.data };
}
