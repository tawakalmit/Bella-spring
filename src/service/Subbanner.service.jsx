import axios from "axios";

export const getSubbanner = (callback) => {
  axios
    .get("https://mitworks.my.id/api/features")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
