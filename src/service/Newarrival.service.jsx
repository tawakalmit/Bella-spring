import axios from "axios";

export const getNewarrival = (callback) => {
  axios
    .get("https://mitworks.my.id/api/new_arrival")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
