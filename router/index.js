const express = require("express");
const router = new express.Router();

const users = [{ name: "Jordan", email: "email@email.com", favoriteLanguage: "French" }, {name: "Betty", email: "email2@email.com", favoriteLanguage: "JavaScript"}, {name: "Ludwig", email: "email3@email.com", favoriteLanguage: "French"}]
const images = ["img/code.jpg", "img/girlcoding.jpg", "img/laptop.jpg"]

router.get("/", (req, res) => {
  res.render("home", {images});
});

router.get("/my-dev-squad", (req, res) => {
  res.render("users", {users});
});

router.get("/add-new-ironhacker", (req, res) => {
  res.render("formUser");
});


module.exports = router;