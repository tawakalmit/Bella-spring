import axios from "axios";

export const getCollection = (callback) => {
  axios
    .get("https://mitworks.my.id/api/product_category")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
