import axios from "axios";

export const getArtikel = (callback) => {
  axios
    .get("https://mitworks.my.id/api/posts")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
