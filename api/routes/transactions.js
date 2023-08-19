const {
  addLiabilities,
  getLiabilities,
  deleteLiabilities,
} = require("../controllers/liabilities");
const { addAssets, getAssets, deleteAssets } = require('../controllers/assets');

const router = require('express').Router();


router
  .post("/add-assets", addAssets)
  .get("/get-assets", getAssets)
  .delete("/delete-assets/:id", deleteAssets)
  .post("/add-liabilities", addLiabilities)
  .get("/get-liabilities", getLiabilities)
  .delete("/delete-liabilities/:id", deleteLiabilities);

module.exports = router