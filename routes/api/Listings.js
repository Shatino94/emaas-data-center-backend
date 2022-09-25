const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const listingMap = require("../../utils/mapping");
const validateData = require("../../middleware/validateData");
const { Listing, listingValidator } = require("../../db/models/Listing");
const axios = require("axios").default;

function formatData(listing, mapper) {
  let keys = Object.keys(listing);
  const obj = {};
  keys.map((item) => {
    let a = mapper[item] || null;
    let b = listing[item];
    obj[item] = mapper[item] ? eval(a)[b] : listing[item];
  });

  return obj;
}

router.get("/", [auth, admin], async (req, res) => {
  const listings = await Listing.find({});
  res.send(listings);
});

router.post("/", [auth, validateData(listingValidator)], async (req, res) => {
  const data = req.body;
  const result = await axios.post(process.env.APPRAISAL_ENDPOINT, data);
  const formattedListing = formatData(data, listingMap);
  formattedListing.agentId = req.user.id;
  const listingStorage = { ...result, ...formattedListing };
  const newListing = new Listing({ ...listingStorage });
  await newListing.save();
  res.status(201).send({ ok: true, data: result });
});

module.exports = router;
