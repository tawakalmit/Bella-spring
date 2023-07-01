import axios from "axios";

export const getCustomer = (callback) => {
  axios
    .get("https://mitworks.my.id/api/testimony")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
