import axios from "axios";

export const getBanner = (callback) => {
  axios
    .get("https://mitworks.my.id/api/homebanner")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
