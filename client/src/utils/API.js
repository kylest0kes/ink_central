import axios from "axios";

export default {
  getPosts: function() {
    return axios.get("/api/post");
  },
  makePost: function(postData) {
    return axios.post("/api/post", postData);
  },
  getUser: function(username) {
    return axios.get("/api/user/" +  username);
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
  },
  getUserById: function (id) {
    return axios.get("/api/profile/" + id);
  },
  getPostById: function (id) {
    return axios.get("/api/post/" + id);
  },
  deletePost: function (id) {
    return axios.delete("api/post/" + id)
  }
};
