import axios from "axios";

export default {
  // Gets all books
  // ============ for later use, make sure you update the routes!!! =========
  getPosts: function() {
    return axios.get("/api/post");
  },
  makePost: function(postData) {
    return axios.post("/api/post", postData);
  },
  saveUser: function(userData) {
    return axios.post("/api/register", userData);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  }
};
