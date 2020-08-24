import axios from "axios";

export default {
  // Gets all books
  // ============ for later use, make sure you update the routes!!! =========
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // // Gets the book with the given id
  // getUser: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteUser: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
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
